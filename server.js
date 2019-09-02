const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(CORS());


app.get('/', (req, res) => {
	res.send('here');
});

app.get('/api/movies/:id', (req, res) => {
	const movie = movies.filter(movie => movie.id.toString() === req.params.id)[0];
	res.status(200).json(movie);
});

app.post('/api/movies', (req, res) => {
	if (req.body.id !== undefined) movies.push(req.body);
	res.status(201).json(movies);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
