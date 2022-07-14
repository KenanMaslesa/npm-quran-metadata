const data = require("./data");

const getSuraList = () => {
  const suraList = [...data.suraList];
  return suraList;
}

const searchSuraByBosnianName = (name) => {
  const suraList = [...data.suraList];

  return suraList.filter(
    sura =>
      contains(sura.name.bosnian, name) ||
      contains(sura.name.bosnianTranscription, name)
  );
}

const searchSuraByEnglishName = (name) => {
  const suraList = [...data.suraList];

  return suraList.filter(
    sura =>
      contains(sura.name.english, name) ||
      contains(sura.name.englishTranscription, name)
  );
}

const searchSuraByArabicName = (name) => {
  const suraList = [...data.suraList];

  return suraList.filter(
    sura =>
      contains(sura.name.arabic, name)
  );
}

const searchSuraByName = (name) => {
  const suraList = [...data.suraList];

  return suraList.filter(
    sura =>
      contains(sura.name.arabic, name) ||
      contains(sura.name.bosnian, name) ||
      contains(sura.name.bosnianTranscription, name)
  );
}

const getSuraByIndex = (index) => {
  return data.suraList.filter(sura => +sura.index === +index)[0];
}

const sortSuraListByFirstPublished = () => {
  const suraList = [...data.suraList];

  return suraList.sort((a, b) => {
    return a.orderInPublishing - b.orderInPublishing;
  });
}

const sortSuraListByLastPublished = () => {
  const suraList = [...data.suraList];

  return suraList.sort((a, b) => {
    return b.orderInPublishing - a.orderInPublishing;
  });
}

const getSuraListPublishedInMekka = () => {
  const suraList = [...data.suraList];

  return suraList.filter(sura => sura.type === "Meccan");
}

const getSuraListPublishedInMedina = () => {
  const suraList = [...data.suraList];

  return suraList.filter(sura => sura.type === "Medinan");
}

const getSuraByPageNumber = (page) => {
  const suraList = [...data.suraList];
  let suraVm = [];
  suraList.forEach((sura) => {
    if (
      +page >= sura.startPage &&
      +page <= sura.endPage
    ) {
      suraVm.push(sura);
    }
  });
  return suraVm;
}

const getJuzByPageNumber = (page) => {
  const juzList = [...data.juzList];
  let juzVm;
  juzList.forEach((juz) => {
    if (
      +page >= juz.startPage &&
      +page <= juz.endPage
    ) {
      juzVm = juz;
    }
  });
  return juzVm;
}

const getSuraListByJuz = (juzIndex) => {
    const suraListFromJuzlist = data.juzList.filter(juz => +juz.id === +juzIndex).map(item => item.surahs)[0];
    const returnedData = [];
    suraListFromJuzlist.forEach(sura => {
        const suraInfo = getSuraByIndex(sura.id);
        returnedData.push(suraInfo);
    });
    return returnedData;
}


const getJuzList = () => {
  return data.juzList;
}

const searchJuzListById = (id) => {
  const juzList = [...data.juzList];
  return juzList.filter(item => contains(item.id, id));
}

const getJuzById = (id) => {
  return data.juzList.filter(juz => +juz.id === +id)[0];
}

const getNumberOfWordsAndLettersPerPage = (page) => {
  return data.wordsAndLettersPerPage.filter(item => item.page === +page)[0];
}

const getPageInfo = (page) => {
  const sura = getSuraByPageNumber(page);
  const juz = getJuzByPageNumber(page);
  const numberOfWordsAndLetters = getNumberOfWordsAndLettersPerPage(page);
  const response = {
      pageNumber: page,
      sura: sura.map(item => item.name),
      juz: juz.id,
      wordsNumber: numberOfWordsAndLetters.wordsNumber,
      lettersNumber: numberOfWordsAndLetters.lettersNumber,
  }
  return response;
}

//helpers
function contains(item, containsItem) {
  return (item.toString().toLowerCase()).indexOf(containsItem.toString().toLowerCase()) !== -1;
}

module.exports = {
  getSuraList,
  searchSuraByName,
  getSuraByIndex,
  sortSuraListByFirstPublished,
  sortSuraListByLastPublished,
  getSuraListPublishedInMekka,
  getSuraListPublishedInMedina,
  getSuraListByJuz,
  getJuzList,
  getJuzById,
  searchJuzListById,
  getNumberOfWordsAndLettersPerPage,
  searchSuraByBosnianName,
  searchSuraByEnglishName,
  searchSuraByArabicName,
  getSuraByPageNumber,
  getJuzByPageNumber,
  getPageInfo
};
