const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { clog } = require('./middleware/clog');
const { readAndAppend, readFromFile } = require('./helpers/fsUtils');

//Use env. port (for remote server) or if not available 3001.
const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Serve all files in public directory
app.use(express.static('public'));

//As only a few routes related to notes category, no seperated route handlers required
// GET Route for notes html page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET API route to retrieve the saved notes as JSON.
app.get('/api/notes', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);


// POST Route for submitting a note
app.post('/api/notes', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
    const noteId = uuidv4();

    // If all the required properties are present
    if (title && text) {
        // Variable for the object we will save
        const newNote = {
            created: Date.now(),
            noteId,
            title,
            text,
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});

// Wildcard route to direct all other get requests to the home html page
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);