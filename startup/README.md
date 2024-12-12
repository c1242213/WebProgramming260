# WebProgramming260

# Elevator Pitch:
## "One of my favorite activities to pass the time since I was a kid was to fill out coded coloring pictures. The black and white scribbles soon became colorful art after careful color matching precision. With my new project, I hope to digitalize this experience and allow any user to create art by simply selecting a number coordinated color and clicking on a shape of the picture.

# Design
![Alt Text](./Pitch.png)

# Key features include:
## User Authentication: Secure login and registration for personalized experiences.
## Image Selection and Coloring: Users can choose images and fill in specific sections with their preferred colors.
## Real-time Collaboration: With WebSockets, users can collaborate in real time, sharing their color selections or even working together on the same image.
## Persistent Data Storage: Save user progress, allowing them to revisit and continue editing their images later.
## Web Services Integration: Call external services for additional functionalities such as generating random color palettes or fetching creative images for users to color.

# Technologies Breakdown:
## HTML:

### Structural components, like the login page, image gallery, and coloring interface. Two main HTML pages: one for login/signup, and one for the image gallery/coloring interface.
## CSS:

### Responsive design to ensure the platform looks good on any device.Use CSS animations to smoothly transition between coloring sections.
## JavaScript:

### Handle user interactions, such as selecting images, choosing colors, and applying colors to specific sections. Event-driven logic for when a user clicks on a part of the image to color it.
## React:

### A componentized structure for different views like login, image selection, and color application. Manage the routing between login, image selection, and the coloring interface.
## Web Service:

### Call to a third-party API to generate random color palettes (e.g., using the colormind.io API).Backend service with endpoints to save user progress, fetch saved images, and provide images for users to color.
## Authentication:

### Secure user login. After login, display the user’s name and allow access to their personalized gallery.
## Database:

### Store user data, including their saved images and progress.Track login credentials and ensure secure storage.
## WebSocket:

### Real-time updates to an art gallery for users to display their art to others. 

# HTML deliverable:
## HTML pages - I've made a three HTML page for my startup which includes the play, homepage, and about page. Eventually there will be an ability to include your work in a gallery in the scores page. But for now that page just exists. 

## Links - the pages each contain an ability to link to either somewhere else on the website or to another persons work eventually.
## Images - the pages include options for pictures with a svg image. There is a page to includes the images those are. 
## Websocket - A message to tell the user that someone else has added to the art gallery can be used. 

# CSS deliverable
## CSS pages - I've successfully created 4 pages for the user that includes new updated HTML that incorporates their own css file. These files use bootstrap to better design the pages.
### The login and about page - the login and the about page uses CSS to design a clean header and footer that is used in all the pages. It remains similar to the html design but w             ith new color and window resizing

### Play page - My gallery page uses the table design in css to move the pictures the the gallery based on the sizing of the window. It also shows that the user is going to select that image if they hover over the picture. 

### Gallery page - the gallery page has maintained a similar structure to the html update but uses thumbnail to display the pictures. 

# React deliverables
## the css pages work with my jsx pages to allow the user to color the picture of a dog. 
## clicking on a color selects the color and clicking on the part of the svg image colors the shape of the svg image. 
## the user cannot start playing the game until they have login or created an account successfully. 
### I have deployed this and moved on before getting it graded but its completed with a working website. 

# Service deliverables
## NodeJS is a runtime environment that allows my website to run javascript on the backend
## Call third party endpoints using fetch to recieve data from external APIs 
## My application uses port 4000 for my local environment. 