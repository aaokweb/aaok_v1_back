const { getNewConnectionObject, string } = require('../connection');

exports.getImg = (req, res) => {
	const { id } = req.params;
	const connection = getNewConnectionObject();
	if (!id) return res.status(200).json({ result: '' });
	connection.query(
		`SELECT Link FROM pictures WHERE PictureId=${+id}`,
		(err, result) => {
			if (err) {
				console.log(err);
				return res.status(200).json({
					ok: false,
					result: [],
				});
			} else {
				// console.log(result);
				res.status(200).json({
					ok: true,
					result,
				});
			}
		}
	);
	connection.end();
};

exports.getImgData = (req, res) => {
	const { id } = req.params;
	const connection = getNewConnectionObject();
	connection.query(`${string} WHERE P.PictureId=${+id}`, (err, result) => {
		if (err) {
			console.log(err);
			return res.status(200).json({
				ok: false,
				result: [],
			});
		} else {
			res.status(200).json({
				ok: true,
				result,
			});
		}
	});
	connection.end();
};
