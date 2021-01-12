# constellation: a Social Netword API

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

your walkthrough video should show the POST and DELETE routes for reactions to thoughts being tested in Insomnia Core.

## Description
This application is the API for a social network web application designed to enable and promote sharing among neighbors. Users can submit a post with an item or a list of goods they have to share or post a request for an item, and respond to others' posts.



### Programming Languages and Technologies Used:
- NoSQL
- MongoDB
- Node.js
- ES6
- Javascript

### NPM Packages:
- Express.js
- Mongoose

## Table of Contents:
- [Instructions for Installation](#instructions-for-installation)
- [Usage](#usage)
- [Contributions](#contribution-guidelines)
- [Questions?](#questions?)


## <a name="instructions-for-installation">Instructions for Installation</a>:
1. Clone constellation repository,
1. Install Node.js ('npm init --y'),
1. From the terminal, run 'npm start' to instantiate the server and trigger creation of the database,
1. From the terminal, enter "npm run seed", and
1. From the terminal, run 'npm start'.


## <a name="usage">Usage</a>:
[![Application Screenshot](./assets/Walkthrough-screenshot.png)*Click the image-link to access a video walkthrough of the application:*]("https://drive.google.com/file/d/1JCVegcQxAKZSh0VNObS1mEwHjHBLnmZ5/view")

    
## <a name="contribution-guidelines">Contributions</a>:
Made with ☕+❤️ by Sara Krizan and in consultation with several LAs, TA, and learning instructor through the University of Wisconsin Extended Campus Coding Bootcamp.

Please feel free to contact me via my GitHub account below with any requests to contribute to this project or collaborate on future works.
    

## <a name="questions?">Questions?</a> 
Sara Krizan    
[GitHub](https://github.com/SMKrizan)
    