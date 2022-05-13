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
  searchSuraByBosnianName,
  searchSuraByEnglishName,
  searchSuraByArabicName
  getSuraByIndex,
  getSuraByPageNumber,
  getJuzByPageNumber,
  sortSuraListByFirstPublished,
  sortSuraListByLastPublished,
  getSuraListPublishedInMekka,
  getSuraListPublishedInMedina,
  getSuraListByJuz,
  getJuzList,
  getJuzById,
  searchJuzListById,
  getNumberOfWordsAndLettersPerPage
```
## Usage
```typescript
const quranMetaData = require('@kmaslesa/quran-metadata');
```

```bash
quranMetaData.getSuraList();

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
quranMetaData.searchSuraByName(searchTerm); //bosnian, arabic and english
quranMetaData.searchSuraByBosnianName(searchTerm),
quranMetaData.searchSuraByEnglishName(searchTerm),
quranMetaData.searchSuraByArabicName(searchTerm)

EXAMPLE:
quranMetaData.searchSuraByBosnianName('krava');
quranMetaData.searchSuraByEnglishName('opener');
quranMetaData.searchSuraByArabicName('الفاتحة');
```


```typescript
quranMetaData.getSuraByIndex(index); //index = 1-114

EXAMPLE: 
quranMetaData.getSuraByIndex(1);
```

```typescript
quranMetaData.getJuzByPageNumber(page); //page = 1-604

EXMAPLE: 
quranMetaData.getJuzByPageNumber(50);

RESPONSE:
{"id":3,"juzNumber":3,"surahs":[{"id":2,"startAyah":253,"endAyah":286},{"id":3,"startAyah":1,"endAyah":92}],"firstAyahId":260,"lastAyahId":385,"numberOfAyahs":126,"startPage":42,"endPage":61}
```
```typescript
quranMetaData.getSuraByPageNumber(page); //page = 1-604

EXAMPLE: 
quranMetaData.getSuraByPageNumber(604);

REPONSE:
```
[
	{
		"index":112,
		"numberOfAyas":4,
		"startAyaIndex":6221,
		"name":{
			"arabic":"الإخلاص",
			"english":"The Sincerity",
			"englishTranscription":"Al-Ikhlas",
			"bosnian":"Iskrenost",
			"bosnianTranscription":"El-Ihlas"
		},
		"aboutSura":{
			"bosnian":"Potvrđivanje da je Allah jedinstven u svome savršenstvu, božanstvenosti i čistoći od mahana"
		},
		"type":"Meccan",
		"orderInPublishing":22,
		"numberOfWords":19,
		"numberOfLetters":47,
		"startJuz":30,
		"endJuz":30,
		"startPage":604,
		"endPage":604,
		"totalPages":1
	},
	{
		"index":113,
		"numberOfAyas":5,
		"startAyaIndex":6225,
		"name":{
			"arabic":"الفلق",
			"english":"The Daybreak",
			"englishTranscription":"Al-Falaq",
			"bosnian":"Svitanje",
			"bosnianTranscription":"El-Felek"
		},
		"aboutSura":{
			"bosnian":"Traženje zaštite kod Allaha od vidljivog zla."
		},
		"type":"Meccan",
		"orderInPublishing":20,
		"numberOfWords":27,
		"numberOfLetters":74,
		"startJuz":30,
		"endJuz":30,
		"startPage":604,
		"endPage":604,
		"totalPages":1
	},
	{
		"index":114,
		"numberOfAyas":6,
		"startAyaIndex":6230,
		"name":{
			"arabic":"الناس",
			"english":"The Mankind",
			"englishTranscription":"An-Nas",
			"bosnian":"Ljudi",
			"bosnianTranscription":"En-Nas"
		},
		"aboutSura":{
			"bosnian":"Zaštita kod Allaha od zla šejtana i njegovih došaptavanja i od skrivenog zla."
		},
		"type":"Meccan",
		"orderInPublishing":21,
		"numberOfWords":24,
		"numberOfLetters":79,
		"startJuz":30,
		"endJuz":30,
		"startPage":604,
		"endPage":604,
		"totalPages":1
	}
]
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

RESPONSE:
[
  {
    id: 1,
    juzNumber: 1,
    surahs: [
      {
        id: 1,
        startAyah: 1,
        endAyah: 7,
        name: {
          arabic: "الفاتحة",
          english: "The Opener",
          englishTranscription: "Al-Fatihah",
          bosnian: "Pristup",
          bosnianTranscription: "El-Fatiha",
        },
      },
      {
        id: 2,
        startAyah: 1,
        endAyah: 141,
        name: {
          arabic: "البقرة",
          english: "The Cow",
          englishTranscription: "Al-Baqarah",
          bosnian: "Krava",
          bosnianTranscription: "El-Bekare",
        },
      },
    ],
    firstAyahId: 1,
    lastAyahId: 148,
    numberOfAyahs: 148,
    startPage: 1,
    endPage: 21,
  },
  {
    id: 2,
    juzNumber: 2,
    surahs: [
      {
        id: 2,
        startAyah: 142,
        endAyah: 252,
        name: {
          arabic: "البقرة",
          english: "The Cow",
          englishTranscription: "Al-Baqarah",
          bosnian: "Krava",
          bosnianTranscription: "El-Bekare",
        },
      },
    ],
    firstAyahId: 149,
    lastAyahId: 259,
    numberOfAyahs: 111,
    startPage: 22,
    endPage: 41,
  },
  {
    id: 3,
    juzNumber: 3,
    surahs: [
      {
        id: 2,
        startAyah: 253,
        endAyah: 286,
        name: {
          arabic: "البقرة",
          english: "The Cow",
          englishTranscription: "Al-Baqarah",
          bosnian: "Krava",
          bosnianTranscription: "El-Bekare",
        },
      },
      {
        id: 3,
        startAyah: 1,
        endAyah: 92,
        name: {
          arabic: "آل عمران",
          english: "Family of Imran",
          englishTranscription: "Ali 'Imran",
          bosnian: "Imranova porodica",
          bosnianTranscription: "Ali-'Imran",
        },
      },
    ],
    firstAyahId: 260,
    lastAyahId: 385,
    numberOfAyahs: 126,
    startPage: 42,
    endPage: 61,
  },
  {
    id: 4,
    juzNumber: 4,
    surahs: [
      {
        id: 3,
        startAyah: 93,
        endAyah: 200,
        name: {
          arabic: "آل عمران",
          english: "Family of Imran",
          englishTranscription: "Ali 'Imran",
          bosnian: "Imranova porodica",
          bosnianTranscription: "Ali-'Imran",
        },
      },
      {
        id: 4,
        startAyah: 1,
        endAyah: 23,
        name: {
          arabic: "النساء",
          english: "The Women",
          englishTranscription: "An-Nisa",
          bosnian: "Žene",
          bosnianTranscription: "En-Nisa",
        },
      },
    ],
    firstAyahId: 386,
    lastAyahId: 516,
    numberOfAyahs: 131,
    startPage: 62,
    endPage: 81,
  },
  {
    id: 5,
    juzNumber: 5,
    surahs: [
      {
        id: 4,
        startAyah: 24,
        endAyah: 147,
        name: {
          arabic: "النساء",
          english: "The Women",
          englishTranscription: "An-Nisa",
          bosnian: "Žene",
          bosnianTranscription: "En-Nisa",
        },
      },
    ],
    firstAyahId: 517,
    lastAyahId: 640,
    numberOfAyahs: 124,
    startPage: 82,
    endPage: 101,
  },
	....
]
```

```bash
quranMetaData.getNumberOfWordsAndLettersPerPage(1);

RESPONSE:
{"page":1,"wordsNumber":29,"lettersNumber":145}
```


## License
[MIT](https://choosealicense.com/licenses/mit/)