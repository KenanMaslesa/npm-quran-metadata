# بسم الله الرحمن الرحيم 
# Quran metadata

## Installation

```bash
npm install @kmaslesa/quran-metadata
```
## Functions
```bash
  getSuraList,
  searchSuraByName,
  getSuraByIndex,
  sortSuraListByFirstPublished,
  sortSuraListByLastPublished,
  getSuraListPublishedInMekka,
  getSuraListPublishedInMedina,
  getSuraListByJuz,
  getJuzList,
  getJuzByIndex,
  getNumberOfWordsAndLettersPerPage
```
## Usage
```typescript
const quranMetaData = require('@kmaslesa/quran-metadata');
```

```typescript
quranMetaData.getSuraList();
```

```bash
RESPONSE:
[
	{
		"index":1,
		"numberOfAyas":7,
		"startAyaIndex":0,
		"name":{
			"arabic":"الفاتحة",
			"english":"The Opener",
			"englishTranscription":"Al-Fatihah",
			"bosnian":"Pristup",
			"bosnianTranscription":"El-Fatiha"
		},
		"aboutSura":{
			"bosnian":"Obraćanje i usmjeravanje ka Allahu kroz obožavanje jedino Njega."
		},
		"type":"Meccan",
		"orderInPublishing":5,
		"numberOfWords":29,
		"numberOfLetters":142,
		"startJuz":1,
		"endJuz":1,
		"startPage":1,
		"endPage":1,
		"totalPages":1
	},
	{
		"index":2,
		"numberOfAyas":286,
		"startAyaIndex":7,
		"name":{
			"arabic":"البقرة",
			"english":"The Cow",
			"englishTranscription":"Al-Baqarah",
			"bosnian":"Krava",
			"bosnianTranscription":"El-Bekare"
		},
		"aboutSura":{
			"bosnian":"Pripremanje umeta za uspostavu života na Zemlji i uspostavljanje Allahove vjere, zatim pojašnjenje vrsta i kategorija ljudi. U ovoj suri su objašnjeni temelji imana i opći principi šerijata."
		},
		"type":"Medinan",
		"orderInPublishing":87,
		"numberOfWords":6144,
		"numberOfLetters":25500,
		"startJuz":1,
		"endJuz":3,
		"startPage":2,
		"endPage":49,
		"totalPages":48
	},
	...
	]
```

```typescript
quranMetaData.searchSuraByName(searchTerm);
EXAMPLE:
quranMetaData.searchSuraByName('bek');
```


```typescript
quranMetaData.getSuraByIndex(index); //index = 1-114
EXAMPLE: 
quranMetaData.getSuraByIndex(1);
```


```typescript
quranMetaData.sortSuraListByFirstPublished();
```

```typescript
quranMetaData.sortSuraListByLastPublished();
```

```typescript
quranMetaData.getSuraListPublishedInMekka();
```

```typescript
quranMetaData.getSuraListPublishedInMedina();
```

```typescript
quranMetaData.getSuraListByJuz(juz); //juz = 1-30

EXAMPLE:
quranMetaData.getSuraListByJuz(1);
```

```typescript
quranMetaData.getJuzList();
```
```bash
RESPONSE:
[
	{
		"id":1,
		"juzNumber":1,
		"surahs":[
			{
				"id":1,
				"startAyah":1,
				"endAyah":7
			},
			{
				"id":2,
				"startAyah":1,
				"endAyah":141
			}
		],
		"firstAyahId":1,
		"lastAyahId":148,
		"numberOfAyahs":148,
		"startPage":1,
		"endPage":21
	},
	{
		"id":2,
		"juzNumber":2,
		"surahs":[
			{
				"id":2,
				"startAyah":142,
				"endAyah":252
			}
		],
		"firstAyahId":149,
		"lastAyahId":259,
		"numberOfAyahs":111,
		"startPage":22,
		"endPage":41
	},
	{
		"id":3,
		"juzNumber":3,
		"surahs":[
			{
				"id":2,
				"startAyah":253,
				"endAyah":286
			},
			{
				"id":3,
				"startAyah":1,
				"endAyah":92
			}
		],
		"firstAyahId":260,
		"lastAyahId":385,
		"numberOfAyahs":126,
		"startPage":42,
		"endPage":61
	},
	{
		"id":4,
		"juzNumber":4,
		"surahs":[
			{
				"id":3,
				"startAyah":93,
				"endAyah":200
			},
			{
				"id":4,
				"startAyah":1,
				"endAyah":23
			}
		],
		"firstAyahId":386,
		"lastAyahId":516,
		"numberOfAyahs":131,
		"startPage":62,
		"endPage":81
	},
	{
		"id":5,
		"juzNumber":5,
		"surahs":[
			{
				"id":4,
				"startAyah":24,
				"endAyah":147
			}
		],
		"firstAyahId":517,
		"lastAyahId":640,
		"numberOfAyahs":124,
		"startPage":82,
		"endPage":101
	},
	{
		"id":6,
		"juzNumber":6,
		"surahs":[
			{
				"id":4,
				"startAyah":148,
				"endAyah":176
			},
			{
				"id":5,
				"startAyah":1,
				"endAyah":81
			}
		],
		"firstAyahId":641,
		"lastAyahId":750,
		"numberOfAyahs":110,
		"startPage":102,
		"endPage":120
	},
	{
		"id":7,
		"juzNumber":7,
		"surahs":[
			{
				"id":5,
				"startAyah":82,
				"endAyah":120
			},
			{
				"id":6,
				"startAyah":1,
				"endAyah":110
			}
		],
		"firstAyahId":751,
		"lastAyahId":899,
		"numberOfAyahs":149,
		"startPage":121,
		"endPage":141
	},
	{
		"id":8,
		"juzNumber":8,
		"surahs":[
			{
				"id":6,
				"startAyah":111,
				"endAyah":165
			},
			{
				"id":7,
				"startAyah":1,
				"endAyah":87
			}
		],
		"firstAyahId":900,
		"lastAyahId":1041,
		"numberOfAyahs":142,
		"startPage":142,
		"endPage":161
	}
	....
]
```

```typescript
quranMetaData.getJuzByIndex(index); //index = 1-30

EXAMPLE:
quranMetaData.getJuzByIndex(30);
```

```bash
quranMetaData.getNumberOfWordsAndLettersPerPage(1);

RESPONSE:
{"page":1,"wordsNumber":29,"lettersNumber":145}
```


## License
[MIT](https://choosealicense.com/licenses/mit/)