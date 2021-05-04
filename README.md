# Intercontinental Diseases

## Links
Website: https://group8-project-inst377.herokuapp.com/
Developer Manual: https://github.com/josephmcccarthy/Group8-Project-INST377/#developer-manual

## Description of Project
In a world of disinformation, we set out with one goal: set the record straight when it comes to disease information. This website allows us to aggregate information about the world's deadliest diseases, compare mortality and demographics and so on. All of this is in order to create a space for accurate, reliable information for use in research, prevention, and funding. Firstly, we wanted to examine the effects that these disease have on different people in different geographic regions over time, which is especially relevant given the current climate surrounding the Covid-19 pandemic.

## Target Browsers
PC*: Firefox, Chrome, Edge, Safari
Mobile*: Android/iOS
*newest versions of all browsers

# Developer Manual

## Installation Guide/Running on Local Server
1. Clone repository to your VSCode
2. Open a terminal in VSCode and type "npm install"
3. After this completes, type "npm start"
4. Open a webpage to http://localhost:3000/

## Running Tests
1. Assuming the localhost is running, type "npx cypress open" into your terminal. Here, you can write your own tests in Cypress for debugging purposes if you so choose.

## Server Application API
- GET: Returns the specified data from the database.
- POST: Sends specified data to the database.
- PUT: Updates the specified data in the database.
- DELETE: Deletes the specified data from the database.

## Known Bugs
- Server will crash if you add "broken" data; to fix this, restart the server and please don't post/put that data again.

## Future Development
- Add more diseases to the database.
- Add more tables to the database.
- Be able to aggregate information about selected diseases on a single page.
- Better filter features for the graphs.