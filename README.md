# note-taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Full stack client / server application that allows a user to create notes and save them. It uses node.js with express.js running as the server with html/css/js front end. Notes are saved in a json file.

Site is currently hosted on AWS at: https://notetaker.robpdavis.com.au/

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Licence](#Licence)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Running on localhost - Node.js must be installed. The npm Express and uuid packages are also required. Firstly initialise the npm in the directory for the application by typing npm init in the console. The install dependencies (Express and uuid) by typing npm install. Ensure the package.json file is included in the directory.

File structure of the application:
```md
.
├── db/                    // db.json file used to store notes
├── helpers/               // file system helper for reading, updating and writing to files    
├── middleware/            // logger for logging requests to the server in the console
├── public/                // client side files to display website and provide UI
├── .gitignore             // indicates which folders and files Git should ignore
├── LICENCE                // licence file 
├── server.js              // runs the backend server application
└── package.json           
```

## Usage
Run the server application by typing node server.js in the console. A home landing page is then displayed. The user is required to click on the Get Started button to go to a notes page. The notes page displays a list of notes on the left with the note details on the right. A new note can be created by seting the note title and note text. A save button is then display to save the note. When the note is saved it is added to the notes list. A note can be deleted by clicking the trash button in the notes list.

## Credits
Rob Davis Github: [robertpdavis](https://github.com/robertpdavis)

## Licence
MIT License

## Contributing
Please contact me at: robertpdavis@optusnet.com.au

## Tests
No tests are included. Refer to console for server request activity.

## Questions
* Github: [robertpdavis](https://github.com/robertpdavis)
* Email: robertpdavis@optusnet.com.au

Screenshots<br/>
![Webpage screenshot](https://github.com/robertpdavis/note-taker/blob/main/assets/images/screenshot1.png "Screenshot of landing page")

![Webpage screenshot](https://github.com/robertpdavis/note-taker/blob/main/assets/images/screenshot2.png "Screenshot of notes page")