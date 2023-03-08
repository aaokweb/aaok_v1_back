const { getNewConnectionObject } = require('../connection');

exports.clusterQuery = (req, res) => {
	const clusterId = req.params['cid'];
	const conn = getNewConnectionObject();
	conn.query(
		`
    SELECT p_in.PersonId, p.NameEnglish, p.NameKorean, p.NameHancha
    FROM
      (SELECT PersonId, ContainedInCluster
      FROM pictured_in
      WHERE ContainedInCluster = ${clusterId}) p_in
    JOIN people p
    ON p_in.PersonId = p.PersonId
      `,
		(err, result) => {
			if (err) {
				return res.status(200).json({
					ok: false,
					err,
					result: [],
				});
			}

			res.status(200).json(result);
		}
	);
	conn.end();
};

exports.getRelated = (req, res) => {
	const personId = req.params['pid'];
	const conn = getNewConnectionObject();

	conn.query(
		`
    SELECT DISTINCT ar.PersonB AS OtherPersonId
          ,art.RoleBEnglish
          ,art.RoleBKorean
          ,art.RoleBHancha
          ,art.RelationshipEnglish
          ,art.RelationshipKorean
          ,art.RelationshipHancha
          ,p.NameEnglish
          ,p.NameKorean
          ,p.NameHancha
    FROM agnatic_relationships ar
    JOIN agnatic_relationship_types art ON
      ar.AgnaticRelationshipId = art.AgnaticRelationshipId
    JOIN people p ON
      ar.PersonB = p.personId
    WHERE  ar.PersonA = "${personId}"
      `,
		(err, result) => {
			if (err) {
				return res.status(200).json({
					ok: false,
					err,
					result: [],
				});
			}
			// console.log(result);
			res.status(200).json(result);
		}
	);
	conn.end();
};

exports.getNumberOfLayers = (req, res) => {
	const clusterId = req.params['cid'];
	const conn = getNewConnectionObject();

	conn.query(
		`
    SELECT count(*)
    FROM layers
    WHERE ClusterId = ${clusterId}
    GROUP BY ClusterId
      `,
		(err, result) => {
			if (err) {
				return res.status(200).json({
					ok: false,
					err,
					result: [],
				});
			}
			res.status(200).json(result);
		}
	);
	conn.end();
};
