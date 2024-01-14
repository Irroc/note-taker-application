# Note Taker Application

## Description

The note taker application is so that you can easily take notes digitally and have them stored in a json file so they can be accessed any time you need them without having to keep a browser open. You can check your notes anytime you need by reopening the page.

## Installation and Instructions

You must have nodejs. Once you have nodejs installed use "nmp i" to install the dependencies of the program. after you have the dependencies installed you can run "node server.js" and the server will start allowing you to communicate with the database by typing "http://localhost:3001" to get to the home page. NOTE: Look at the terminal and replace 3001 if your port number is a different number. From there you can proceed to the notes page where you can see all your notes as well as make new ones. Soon the delete button will work but as for right now its just for show. When your done you can use "control + C" to close the server and close the browser.

![alt text](./images/Screenshot%202024-01-14%20131448.png) 
![alt text](./images/Screenshot%202024-01-14%20131428.png)

## Credits

[Express](https://expressjs.com/) package was used as the backbone of the server. <br />
[UUID](https://www.npmjs.com/package/uuid) package was used to give id numbers to the notes in the server.
