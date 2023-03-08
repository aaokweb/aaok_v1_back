const mysql = require('mysql2');

function getNewConnectionObject() {
	const connection = mysql.createConnection({
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DBNAME,
	});
	// const connection = mysql.createConnection({
	// 	host: '127.0.0.1',
	// 	user: 'root',
	// 	password: 'Raj@142181',
	// 	database: 'stiller_new',
	// });
	return connection;
}

const string = `SELECT P.PersonId, P.NameEnglish, P.NameKorean, P.BirthYear, P.DeathYear, P.NameHancha, 
P.IsChungin, P.IsCommoner, P.IsFemale, P.IsMarginalizedYangban, P.IsMonk, 
    P.IsSlave, P.IsYangban, P.TravelYearFrom, P.TravelYearTo, P.CalligraphyReg, 
    P.CalligraphySealCursive, E.ExamEnglish, E.ExamEnglTranslit, E.ExamHancha, 
    E.ExamKorean, ET.DateTaken AS date_of_exam, GI.FirstYearInGovPosition, 
    GT.GovTitleEnglish, GT.GovTitleEnglTranslit, GT.GovTitleHancha, 
    GT.GovTitleKorean, C.IsAgnaticCluster, C.IsAgnaticAssociativeCluster, C.IsAssociateCluster, C.IsSingleName,
    R.ReignEnglish,R.ReignKorean,R.ReignHancha , PIC.Link, PI.LocationInPicture, PIC.DateTaken AS date_of_picture, 
    L.LocationEngl, L.SublocationEngl, L.SubLocationEnglTranslit, L.LocationEnglTranslit, 
    L.SublocationHancha, L.LocationKorean, L.LocationHancha, PI.ContainedInCluster, L.SublocationKorean
FROM people AS P
LEFT JOIN exams_taken AS ET 
ON P.PersonId = ET.PersonId
LEFT JOIN exams AS E
ON E.ExamId = ET.Exam
LEFT JOIN government_individual AS GI
ON P.PersonId = GI.PersonId
LEFT JOIN government_title AS GT
ON GI.GovernmentTitleId = GT.GovernmentTitleId
LEFT JOIN pictured_in AS PI
ON P.PersonId = PI.PersonId
LEFT JOIN inscriptiontype AS C
ON P.PersonId = C.PersonId
LEFT JOIN reigns AS R
ON P.ReignId = R.ReignId
LEFT JOIN pictures AS PIC
ON P.PhotoId = PIC.PictureId
LEFT JOIN locations AS L
ON PIC.LocatedAt=L.LocationId `;

const ref = {
	Calligraphy: 'P.CalligraphyReg',
	'Inscription Type': '',
	'Government Post': 'GT.GovTitleEnglish',
	Location: 'L.LocationEngl',
	'Degree Holders': 'E.ExamEnglish',
	'Travel Period': 'R.ReignEnglish',
};

// let string = `
// SELECT people.PersonId,
//       people.NameEnglish,
//       NameKorean,
//       BirthYear,
//       DeathYear,
//       NameHancha,
//       IsChungin,
//       IsCommoner,
//       IsFemale,
//       IsMarginalizedYangban,
//       IsMonk,
//       IsSlave,
//       IsYangban,
//       TravelYearFrom,
//       TravelYearTo,
//       CalligraphyReg,
//       CalligraphySealCursive
//       ExamEnglish,
//       ExamEnglTranslit,
//       ExamHancha,
//       ExamKorean,
//       exams_taken.DateTaken as exam_date,
//       FirstYearInGovPosition,GovTitleEnglish,GovTitleEnglTranslit,GovTitleHancha,GovTitleKorean,
//       IsAgnatic,IsAgnaticAssociative,IsAssociative,
//       ReignEnglish,
//       picture_links.link,LocationInPicture,pictures.DateTaken as picture_date,LocationEngl, SublocationEngl, SublocationEnglTranslit, LocationEnglTranslit,
//       SublocationHancha, SublocationHancha,
//       LocationKorean, LocationHancha, ContainedInCluster, LayerNumber
// FROM people
// LEFT JOIN pictured_in ON pictured_in.PersonId = people.PersonId
// LEFT JOIN pictures ON pictures.PictureId = pictured_in.PictureId
// LEFT JOIN locations ON locations.LocationId = pictures.LocatedAt
// LEFT JOIN exams_taken ON exams_taken.PersonId=people.PersonId
// LEFT JOIN exams ON exams.ExamId = exams_taken.Exam
// LEFT JOIN government_individual ON government_individual.PersonId=people.PersonId
// LEFT JOIN government_title ON government_title.GovernmentTitleId=government_individual.GovernmentTitleId
// LEFT JOIN clusters ON clusters.ClusterId=pictured_in.ContainedInCluster
// LEFT JOIN reigns_lived_in ON reigns_lived_in.PeopleId=people.PersonId
// left join layers on layers.ClusterId=clusters.ClusterId
// LEFT JOIN reigns ON reigns.ReignId=reigns_lived_in.ReignId
// LEFT JOIN picture_links ON picture_links.PictureId=pictures.PictureId `;

module.exports = { getNewConnectionObject, string, ref };
