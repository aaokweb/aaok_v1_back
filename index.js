const express = require('express');
const searchRouter = require('./routes/Routes');
require('dotenv').config();
const { getNewConnectionObject } = require('./connection');
const cors = require('cors');

const app = express();

app.enable('trust proxy');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', searchRouter);
app.use('/safe', (req, res) => {
	res.status(200).json({
		message: 'Welcome to the AAOK API!',
	});
});
app.get('/test', (req, res) => {
	const connection = getNewConnectionObject();
	connection.connect(err => {
		if (err) {
			console.log(err);
			res.status(504).json({
				message: 'Error connecting to database.',
				err,
			});
		} else {
			connection.query(
				'SELECT * FROM picture_links LIMIT 1',
				(err, result) => {
					// console.log(result);
					if (err) {
						res.status(504).json({ err });
					} else {
						res.status(200).json({
							message: 'Welcome to the AAOK API!',
							result,
						});
					}
				}
			);
		}
	});
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Process started on port ${port}.`));
