# note-taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
Node.js application that creates a team profile responsive webpage from console user input. Inquirer package is required. Jest package is used for class unit tests. Install packages by npm install in the console. Start by node index.js.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Licence](#Licence)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Node.js must be installed. The npm Express and uuid packages are also required. Firstly initialise the npm in the directory for the application by typing npm init in the console. The install dependencies (Express and uuid) by typing npm install. Ensure the package.json file is included in the directory.

File structure of the application:
```md
.
├── db/                    //db.json file used to store notes
├── helpers/               // rendered output (HTML) and CSS style sheets      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```

## Usage
Run the server application by typing node server.js in the console. The user is then asked a list of questions to create the the html webpage. The webpage (along with associated CSS style sheets) is then saved in the dist folder.

## Credits
Rob Davis Github: [robertpdavis](https://github.com/robertpdavis)

## Licence
MIT License

## Contributing
Please contact me at: robertpdavis@optusnet.com.au

## Tests
No tests are included. Refer to console.log for 

## Questions
* Github: [robertpdavis](https://github.com/robertpdavis)
* Email: robertpdavis@optusnet.com.au
