const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');
const { peerProxy, broadcastEvent } = require('./peerProxy.js');

const authCookieName = 'token';
const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.set('trust proxy', true);

const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Auth endpoints omitted for brevity...

// Secure routes
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    req.user = user; // attach user to request for easy access
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Artwork save endpoint
secureApiRouter.post('/artwork', async (req, res) => {
  const artwork = {
    user: req.user.email,
    imageData: req.body.imageData,
    date: new Date().toISOString(),
    ip: req.ip
  };

  await DB.addArtwork(artwork);

  const userName = req.user.email.split('@')[0];
  broadcastEvent('artwork-saved', { user: userName });

  res.send({ status: 'ok' });
});

// Error handling & default fallback
app.use((err, req, res, next) => {
  res.status(500).send({ type: err.name, message: err.message });
});
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);
