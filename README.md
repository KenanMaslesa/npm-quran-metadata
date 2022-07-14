# بسم الله الرحمن الرحيم 
# Quran metadata

## Installation

```bash
npm install @kmaslesa/quran-metadata
```
## Functions
```typescript
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
  getNumberOfWordsAndLettersPerPage,
  getPageInfo
```
## Usage
```typescript
const quranMetaData = require('@kmaslesa/quran-metadata');
```

```typescript
quranMetaData.getSuraList();

RESPONSE:
[
  ...
  {
    index: 60,
    numberOfAyas: 13,
    startAyaIndex: 5150,
    name: {
      arabic: 'الممتحنة',
      english: 'She that is to be examined',
      englishTranscription: 'Al-Mumtahanah',
      bosnian: 'Provjerena',
      bosnianTranscription: 'El-Mumtehine'
    },
    aboutSura: {
      bosnian: 'Čišćenje vjerničkih srca od prijateljevanja i ljubavi prema drugim vjerama mimo Allahove.'
    },
    type: 'Medinan',
    orderInPublishing: 91,
    numberOfWords: 356,
    numberOfLetters: 1510,
    startJuz: 28,
    endJuz: 28,
    startPage: 549,
    endPage: 551,
    totalPages: 3
  },
  {
    index: 61,
    numberOfAyas: 14,
    startAyaIndex: 5163,
    name: {
      arabic: 'الصف',
      english: 'The Ranks',
      englishTranscription: 'As-Saf',
      bosnian: 'Bojni red',
      bosnianTranscription: 'Es-Saff'
    },
    aboutSura: {
      bosnian: 'Stimulisanje vjernika na pomaganje Allahove vjere i borbu na Njegovom putu.'
    },
    type: 'Medinan',
    orderInPublishing: 109,
    numberOfWords: 230,
    numberOfLetters: 900,
    startJuz: 28,
    endJuz: 28,
    startPage: 551,
    endPage: 552,
    totalPages: 2
  },
  {
    index: 62,
    numberOfAyas: 11,
    startAyaIndex: 5177,
    name: {
      arabic: 'الجمعة',
      english: 'The Congregation, Friday',
      englishTranscription: "Al-Jumu'ah",
      bosnian: 'Petak',
      bosnianTranscription: "El-Džumu'a"
    },
    aboutSura: {
      bosnian: 'Pojašnjavanje Allahove blagodati ovom ummetu kojeg je posebno odlikovao uputom i slanjem Poslanika, sallallahu alejhi ve sellem, nakon što je bio u zabludi, zaduživanje pokornošću njemu i upozorenje na opasnost poistovjećivanja sa Jevrejima.'
    },
    type: 'Medinan',
    orderInPublishing: 110,
    numberOfWords: 181,
    numberOfLetters: 720,
    startJuz: 28,
    endJuz: 28,
    startPage: 553,
    endPage: 554,
    totalPages: 2
  },
  {
    index: 63,
    numberOfAyas: 11,
    startAyaIndex: 5188,
    name: {
      arabic: 'المنافقون',
      english: 'The Hypocrites',
      englishTranscription: 'Al-Munafiqun',
      bosnian: 'Licemjeri',
      bosnianTranscription: 'El-Munafikun'
    },
    aboutSura: {
      bosnian: 'Otkrivanje svojstava licemjera i pojašnjavanje njihovog stava naspram islama i muslimana, te upozorenje na opasnost poistovjećivanja s njima.'
    },
    type: 'Medinan',
    orderInPublishing: 104,
    numberOfWords: 185,
    numberOfLetters: 776,
    startJuz: 28,
    endJuz: 28,
    startPage: 554,
    endPage: 555,
    totalPages: 2
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
{
  id: 3,
  juzNumber: 3,
  surahs: [
    { id: 2, startAyah: 253, endAyah: 286, name: [Object] },
    { id: 3, startAyah: 1, endAyah: 92, name: [Object] }
  ],
  firstAyahId: 260,
  lastAyahId: 385,
  numberOfAyahs: 126,
  startPage: 42,
  endPage: 61
}
```
```typescript
quranMetaData.getSuraByPageNumber(page); //page = 1-604

EXAMPLE: 
quranMetaData.getSuraByPageNumber(604);

REPONSE:
[
  {
    index: 112,
    numberOfAyas: 4,
    startAyaIndex: 6221,
    name: {
      arabic: 'الإخلاص',
      english: 'The Sincerity',
      englishTranscription: 'Al-Ikhlas',
      bosnian: 'Iskrenost',
      bosnianTranscription: 'El-Ihlas'
    },
    aboutSura: {
      bosnian: 'Potvrđivanje da je Allah jedinstven u svome savršenstvu, božanstvenosti i čistoći od mahana'
    },
    type: 'Meccan',
    orderInPublishing: 22,
    numberOfWords: 19,
    numberOfLetters: 47,
    startJuz: 30,
    endJuz: 30,
    startPage: 604,
    endPage: 604,
    totalPages: 1
  },
  {
    index: 113,
    numberOfAyas: 5,
    startAyaIndex: 6225,
    name: {
      arabic: 'الفلق',
      english: 'The Daybreak',
      englishTranscription: 'Al-Falaq',
      bosnian: 'Svitanje',
      bosnianTranscription: 'El-Felek'
    },
    aboutSura: { bosnian: 'Traženje zaštite kod Allaha od vidljivog zla.' },
    type: 'Meccan',
    orderInPublishing: 20,
    numberOfWords: 27,
    numberOfLetters: 74,
    startJuz: 30,
    endJuz: 30,
    startPage: 604,
    endPage: 604,
    totalPages: 1
  },
  {
    index: 114,
    numberOfAyas: 6,
    startAyaIndex: 6230,
    name: {
      arabic: 'الناس',
      english: 'The Mankind',
      englishTranscription: 'An-Nas',
      bosnian: 'Ljudi',
      bosnianTranscription: 'En-Nas'
    },
    aboutSura: {
      bosnian: 'Zaštita kod Allaha od zla šejtana i njegovih došaptavanja i od skrivenog zla.'
    },
    type: 'Meccan',
    orderInPublishing: 21,
    numberOfWords: 24,
    numberOfLetters: 79,
    startJuz: 30,
    endJuz: 30,
    startPage: 604,
    endPage: 604,
    totalPages: 1
  }
]
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

```typescript
quranMetaData.getNumberOfWordsAndLettersPerPage(1);

RESPONSE:
{ page: 1, wordsNumber: 29, lettersNumber: 145 }
```

```typescript
quranMetaData.getPageInfo(604);

RESPONSE:
{
  pageNumber: 604,
  sura: [
    {
      arabic: 'الإخلاص',
      english: 'The Sincerity',
      englishTranscription: 'Al-Ikhlas',
      bosnian: 'Iskrenost',
      bosnianTranscription: 'El-Ihlas'
    },
    {
      arabic: 'الفلق',
      english: 'The Daybreak',
      englishTranscription: 'Al-Falaq',
      bosnian: 'Svitanje',
      bosnianTranscription: 'El-Felek'
    },
    {
      arabic: 'الناس',
      english: 'The Mankind',
      englishTranscription: 'An-Nas',
      bosnian: 'Ljudi',
      bosnianTranscription: 'En-Nas'
    }
  ],
  juz: 30,
  wordsNumber: 58,
  lettersNumber: 201
}
```


## License
[MIT](https://choosealicense.com/licenses/mit/)