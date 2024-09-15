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


