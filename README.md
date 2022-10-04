# Framery *Front&Back*

*Everyone has the ability to create pieces of art. Just take a picture and Frame it.*

![screenshot](/test%20copie.jpg)


### Frame it!

*Everyone has the ability to create pieces of art. Just take a picture and Frame it.*

We believe people needs to share their piece of art and their side of their story. They just need a frame to be highlighted.


Link to the full project:
https://www.figma.com/file/eyXcHM26zGBwtOUqFkMiHZ/Framery-UI-DESIGN?node-id=0%3A1



### Learning Objectives

- Make the front of the application

- Setup, design and manage a database management system

- Translate a real-life usecase into a database model

- Discover a full app setup.

- Model a simple non-relational DB model



### Funnel

- Registration => Sign In, Sign Up, creation of profile
 
- The Hall => First page of the app, where all the new posts of all users are displayed.
 
- The Floor => Page where the profile of the user or the person they search for is displayed.

Check the full funnel here! https://miro.com/app/board/uXjVPUTHdbM=/


### Features

**Framery** is a social media based on Instagram features. Goal is to focus on image instead of video with a mix between Tweeter (repost), Pinterest (Pin/Save Items in galleries) and Instagram (feed concept/scroll).

- Being able to sign in, sign up, and create a profile.

- Showcase every Post made on the platform in Chronological order.

- Being able to create a new post on its own floor.


### Tech in use

To be able to run and develop on our code base you need to have some libraries installed on your local machine.

- `react` using Component and Hooks.
- `node.js` for Routes and Back.
- `npm` package installation.
- `css` vanilla. Like the old ones.
- `html5` basic.
- `mangoDB` datbase in use.
- `axios (react)` fetching database stuffs
- `eslint` for code formatting.
- `prettier` for code formatting.

### Development


### Code Architecture

Not an extensive list, but where you gonna be working the most.

```
website
|
src
|
components**/  // components related things
|
hooks/  // custom helper hooks
|
models/  // redux related stuff
  |
  models/
    |
    Actions.js // action creators pertaining to the model
    |
    ModelR.js // reducer pertaining to the model
    |
    Logic.js // backend api calls pertaining to the model. *Newer components use useEffect instead for api calls*
|
routes/  // route declarations for the frontend
|
utils/   // helper functions
|
styles/   // **read below

** each component has his own css file.
```

### Other tools we used 

- Figma (`frontend, services, and scripts repo's`)
- Adobe Illustrator (`SVG creation`)


If questions please ask. ❤️ &copy; 2022
