let { getNewConnectionObject, string: str, ref } = require('../connection');

exports.search = (req, res) => {
	const connection = getNewConnectionObject();

	const {
		filters: { advancedFilters, nameFilter },
		sort,
	} = req.body;
	// console.log(advancedFilters);
	let string = str;
	for (let key in advancedFilters) {
		if (key === 'Calligraphy') {
			if (advancedFilters[key].length >= 1) {
				const calligraphy = advancedFilters[key].map(i => {
					if (i === 'sealCursive') return 1;
					if (i === 'regular') return 0;
				});

				string += `WHERE ${ref.Calligraphy} IN (${calligraphy + ''}) `;
				continue;
			} else {
				string += `WHERE P.PersonId is NOT NULL `;
			}
		}
		if (key === 'Inscription Type' && advancedFilters[key].length >= 1) {
			advancedFilters[key].map(i => {
				if (i === 'agnatic') {
					string += `AND C.IsAgnaticCluster = 1 `;
					return 'IsAgnatic';
				}
				if (i === 'agnaticAssociative') {
					string += `AND C.IsAgnaticAssociativeCluster = 1 `;
					return 'IsAgnaticAssociative';
				}
				if (i === 'associative') {
					string += `AND C.IsAssociateCluster = 1 `;
					return 'IsAssociative';
				}
				if (i === 'singleName') {
					string += `AND C.IsSingleName = 1 `;
					return;
				}
			});
			continue;
		}
		if (key === 'Government Post' && advancedFilters[key].length >= 1) {
			string += `AND ${ref['Government Post']} REGEXP "${advancedFilters[
				key
			].reduce((acc, curr, i, arr) => {
				if (i === arr.length - 1) return (acc += curr);
				acc += curr + '|';
				return acc;
			}, '')}" `;
		}
		if (key === 'Location' && advancedFilters[key].length >= 1) {
			if (advancedFilters[key][0] === 'locUndeterminedOther') {
				string += `AND L.LocationEngl NOT REGEXP "jade Stream Ravine|manmulch/'o|myogilsang Buddha|nine Dragon Falls|Podŏk Hermitage|tenThousand Falls Ravine|three Buddha Rock"`;
				continue;
			}
			string += `AND ${ref.Location} REGEXP "${advancedFilters[key].reduce(
				(acc, curr, i, arr) => {
					if (i === arr.length - 1) return (acc += curr);
					acc += curr + '|';
					return acc;
				},
				''
			)}" `;
		}
		if (key === 'Social Status' && advancedFilters[key].length >= 1) {
			advancedFilters[key].forEach(i => {
				if (i === 'ssUndetermined') {
					string += '';
				} else {
					const name = 'Is' + i.charAt(0).toUpperCase() + i.slice(1);
					string += `AND ${name} = 1 `;
				}
			});
		}
		if (key === 'Degree Holders' && advancedFilters[key].length >= 1) {
			string += `AND ${ref['Degree Holders']} REGEXP "${advancedFilters[
				key
			].reduce((acc, curr, i, arr) => {
				if (i === arr.length - 1) return (acc += curr);
				acc += curr + '|';
				return acc;
			}, '')}" `;
		}
		if (key === 'Travel Period' && advancedFilters[key].length >= 1) {
			string += `AND ${ref['Travel Period']} REGEXP "${advancedFilters[
				key
			].reduce((acc, curr, i, arr) => {
				if (i === arr.length - 1) return (acc += curr);
				acc += curr + '|';
				return acc;
			}, '')}" `;
		}
	}
	// console.log(string);
	if (nameFilter) {
		string += `AND P.NameEnglish REGEXP "${nameFilter}" `;
	}
	switch (sort) {
		case 'Name (A-Z)':
			string += `ORDER BY NameEnglish ASC`;
			break;
		case 'Name (Z-A)':
			string += `ORDER BY NameEnglish DESC`;
			break;
		case 'Location (A-Z)':
			string += `ORDER BY LocationEngl ASC`;
			break;
		case 'Location (Z-A)':
			string += `ORDER BY LocationEngl DESC`;
			break;
		case 'Reign (Old-New)':
			string += `ORDER BY ReignEnglish DESC`;
			break;
		case 'Reign (New-Old)':
			string += `ORDER BY ReignEnglish ASC`;
			break;
		default:
			string += ``;
	}
	// console.log(string);
	connection.query(string, (err, result) => {
		if (err) {
			console.log(err);
			return res.status(200).json({
				ok: false,
				result: [],
			});
		}
		res.status(200).json({
			ok: true,
			result,
		});
	});
	connection.end();
};

exports.getIndividualInfo = (req, res) => {
	const { id } = req.params;
	// console.log('id', id);
	const connection = getNewConnectionObject();
	connection.query(`${str} WHERE P.PersonId="${id}"`, (err, result) => {
		if (err) {
			console.log(err);
			return res.status(200).json({
				ok: false,
				result: [],
			});
		}
		// console.log(result[0]);
		res.status(200).json({
			ok: true,
			data: result[0],
		});
	});
	connection.end();
};
