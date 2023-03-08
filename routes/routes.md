# Base URL: `https://aaokbackend.onrender.com/api/`

# To test the safety of the app

```http
GET /api/safe
```

**URL** : `/safe`

**Method** : `GET`

**Query** : NO

## Response

```json
{
	"message": "Welcome to the AAOK API!s"
}
```

# To Test the connection to the database

```http
GET /api/test
```

**URL** : `/test`

**Method** : `GET`

**Query** : NO

## Response on Error

```json
{
	"message": "Error connecting to database.",
	"err": "... Error produced by the database ..."
}
```

## Response on Success example

```json
{
	"message": "Welcome to the AAOK API!",
	"result": [
		{
			"PictureId": "0011",
			"link": "https://uploadstesting.s3.amazonaws.com/0011"
		}
	]
}
```

# Get Filtered Search

```http
GET /api/searchfiltered
```

**URL** : `/searchfiltered`

**Method** : `POST`

**Query** : NO

**Request Body** : YES

```json
// The maximum requests that could be sent from the front end
// This depends on the number of filters that are applied
{
	"filters": {
		"advancedFilters": {
			"Calligraphy": ["sealCursive", "regular"],
			"Inscription Type": [
				"agnatic",
				"agnaticAssociative",
				"associative",
				"singleName"
			],
			"Government Post": [
				"accountant",
				"censor",
				"commander",
				"governor",
				"guard",
				"inspector",
				"magistrate",
				"minister",
				"primeMinister",
				"secretary",
				"stateCouncilor",
				"govUndeterminedOther"
			],
			"Location": [
				"jadeStreamRavine",
				"manmulcho",
				"myogilsangBuddha",
				"nineDragonFalls"
			],
			"Social Status": [
				"chungin",
				"commoner",
				"female",
				"marginalizedYangban",
				"monk",
				"slave",
				"yangban",
				"ssUndetermined"
			],
			"Degree Holders": [
				"civilExam",
				"militaryExam",
				"technicalExam",
				"dhUndetermined"
			]
		},
		"nameFilter": ""
	},
	"sort": "relevance"
}
```

## Response

```json
{
	"ok": true,
	"result": [
		{
			"PersonId": "1086_1",
			"NameEnglish": "Kim Pyŏnggye ",
			"NameKorean": "김병계",
			"BirthYear": "1855",
			"DeathYear": null,
			"NameHancha": "金炳溎",
			"IsChungin": null,
			"IsCommoner": null,
			"IsFemale": null,
			"IsMarginalizedYangban": null,
			"IsMonk": null,
			"IsSlave": null,
			"IsYangban": 1,
			"TravelYearFrom": null,
			"TravelYearTo": null,
			"CalligraphyReg": null,
			"ExamEnglish": "1824",
			"ExamEnglTranslit": "munkwa",
			"ExamHancha": "文科",
			"ExamKorean": "문과",
			"exam_date": "1848",
			"FirstYearInGovPosition": null,
			"GovTitleEnglish": null,
			"GovTitleEnglTranslit": null,
			"GovTitleHancha": null,
			"GovTitleKorean": null,
			"IsAgnatic": 7,
			"IsAgnaticAssociative": 0,
			"IsAssociative": 0,
			"ReignEnglish": null,
			"link": "https://uploadstesting.s3.amazonaws.com/1086",
			"LocationInPicture": "center of rock",
			"picture_date": "2014-05-26T00:00:00.000Z",
			"LocationEngl": null,
			"SublocationEngl": null,
			"SublocationEnglTranslit": null,
			"LocationEnglTranslit": null,
			"SublocationHancha": null,
			"LocationKorean": null,
			"LocationHancha": null,
			"ContainedInCluster": 147,
			"LayerNumber": null
		},
		{
			"PersonId": "1086_2",
			"NameEnglish": "Kim Pyŏnggyo ",
			"NameKorean": "김병교",
			"BirthYear": "1876",
			"DeathYear": null,
			"NameHancha": "金炳喬",
			"IsChungin": null,
			"IsCommoner": null,
			"IsFemale": null,
			"IsMarginalizedYangban": null,
			"IsMonk": null,
			"IsSlave": null,
			"IsYangban": 1,
			"TravelYearFrom": null,
			"TravelYearTo": null,
			"CalligraphyReg": null,
			"ExamEnglish": "1801",
			"ExamEnglTranslit": "munkwa",
			"ExamHancha": "文科",
			"ExamKorean": "문과",
			"exam_date": "1852",
			"FirstYearInGovPosition": null,
			"GovTitleEnglish": null,
			"GovTitleEnglTranslit": null,
			"GovTitleHancha": null,
			"GovTitleKorean": null,
			"IsAgnatic": 7,
			"IsAgnaticAssociative": 0,
			"IsAssociative": 0,
			"ReignEnglish": null,
			"link": "https://uploadstesting.s3.amazonaws.com/1086",
			"LocationInPicture": "center of rock",
			"picture_date": "2014-05-26T00:00:00.000Z",
			"LocationEngl": null,
			"SublocationEngl": null,
			"SublocationEnglTranslit": null,
			"LocationEnglTranslit": null,
			"SublocationHancha": null,
			"LocationKorean": null,
			"LocationHancha": null,
			"ContainedInCluster": 147,
			"LayerNumber": null
		}
	]
}
```

# Get individual information

```http
GET /api/individual/:id
```

**URL** : `/individual/:id`

**Method** : `GET`

**Query** : NO

**Param constraints**

```json
{
	// :id in the url refers to invidual Person id
}
```

## response

```json
{
	"ok": true,
	"data": {
		"PersonId": "1086_2",
		"NameEnglish": "Kim Pyŏnggyo ",
		"NameKorean": "김병교",
		"BirthYear": "1876",
		"DeathYear": null,
		"NameHancha": "金炳喬",
		"IsChungin": null,
		"IsCommoner": null,
		"IsFemale": null,
		"IsMarginalizedYangban": null,
		"IsMonk": null,
		"IsSlave": null,
		"IsYangban": 1,
		"TravelYearFrom": null,
		"TravelYearTo": null,
		"CalligraphyReg": null,
		"ExamEnglish": "1801",
		"ExamEnglTranslit": "munkwa",
		"ExamHancha": "文科",
		"ExamKorean": "문과",
		"exam_date": "1852",
		"FirstYearInGovPosition": null,
		"GovTitleEnglish": null,
		"GovTitleEnglTranslit": null,
		"GovTitleHancha": null,
		"GovTitleKorean": null,
		"IsAgnatic": 7,
		"IsAgnaticAssociative": 0,
		"IsAssociative": 0,
		"ReignEnglish": null,
		"link": "https://uploadstesting.s3.amazonaws.com/1086",
		"LocationInPicture": "center of rock",
		"picture_date": "2014-05-26T00:00:00.000Z",
		"LocationEngl": null,
		"SublocationEngl": null,
		"SublocationEnglTranslit": null,
		"LocationEnglTranslit": null,
		"SublocationHancha": null,
		"LocationKorean": null,
		"LocationHancha": null,
		"ContainedInCluster": 147,
		"LayerNumber": null
	}
}
```

# To get the Image link

```http
GET /api/img/:id
```

**URL** : `/img/:id`

**Method** : `GET`

**Query** : NO

**Param constraints**

```json
{
	// :id in the url refers to Image id
}
```

## response

```json
{
	"ok": true,
	"result": {
		"PictureId": "1086",
		"link": "https://uploadstesting.s3.amazonaws.com/1086"
	}
}
```

# Get the in-cluster information

```http
GET /api/in-cluster/:cid
```

**URL** : `/in-cluster/:cid`

**Method** : `GET`

**Query** : NO

**Param constraints**

```json
{
	// :cid in the url refers to Cluster id
}
```

## response

```json
{
	"result": [
		{
			"PersonId": "1086_1",
			"NameEnglish": "Kim Pyŏnggye ",
			"NameKorean": "김병계",
			"NameHancha": "金炳溎"
		},
		{
			"PersonId": "1086_2",
			"NameEnglish": "Kim Pyŏnggyo ",
			"NameKorean": "김병교",
			"NameHancha": "金炳喬"
		},
		{
			"PersonId": "1086_3",
			"NameEnglish": "Kim Pyŏnggu/guk",
			"NameKorean": "김병구/국",
			"NameHancha": "金炳球/國"
		},
		{
			"PersonId": "1086_4",
			"NameEnglish": "Kim Kyogŭn",
			"NameKorean": "김교근",
			"NameHancha": "金敎根"
		}
	]
}
```

# Get the related information

```http
GET /api/related/:pid
```

**URL** : `/related/:pid`

**Method** : `GET`

**Param constraints**

```json
{
	// :pid in the url refers to Person id
}
```

## response

```json
{
	"result": [
		{
			"OtherPersonId": "1086_3",
			"RoleBEnglish": "younger brother",
			"RoleBKorean": "동생",
			"RoleBHancha": "兄弟\r",
			"RelationshipEnglish": "brother/brother",
			"RelationshipKorean": "형제",
			"RelationshipHancha": "兄弟",
			"NameEnglish": "Kim Pyŏnggu/guk",
			"NameKorean": "김병구/국",
			"NameHancha": "金炳球/國"
		}
	]
}
```
