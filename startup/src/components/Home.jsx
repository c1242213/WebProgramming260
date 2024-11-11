// src/components/Home.jsx
import React from 'react';
import Header from components
import Footer from components

const Home = () => {
  return (
    <div className="bg-dark text-light">
      <Header />
      <main className="container-fluid bg-secondary text-center">
        <h1>Welcome to Picture Perfect</h1>
        <form method="get" action="/play">
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input className="form-control" type="text" placeholder="your@email.com" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">🔒</span>
            <input className="form-control" type="password" placeholder="password" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <button type="submit" className="btn btn-secondary">Create</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
