const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');

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
// GET Route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

// POST Route for submitting a note
fb.post('/', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { email, feedbackType, feedback } = req.body;

    // If all the required properties are present
    if (email && feedbackType && feedback) {
        // Variable for the object we will save
        const newFeedback = {
            email,
            feedbackType,
            feedback,
            feedback_id: uuidv4(),
        };

        readAndAppend(newFeedback, './db/db.json');

        const response = {
            status: 'success',
            body: newFeedback,
        };

        res.json(response);
    } else {
        res.json('Error in posting feedback');
    }
});

// Wildcard route to direct all other get requests to the home page
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);