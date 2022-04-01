const data = require("./data");

function getSuraList() {
  const suraList = [...data.suraList];
  return suraList;
}

function searchSuraByBosnianName(name) {
  const suraList = [...data.suraList];

  return suraList.filter(
    sura =>
      contains(sura.name.bosnian, name) ||
      contains(sura.name.bosnianTranscription, name)
  );
}

function searchSuraByEnglishName(name) {
  const suraList = [...data.suraList];

  return suraList.filter(
    sura =>
      contains(sura.name.english, name) ||
      contains(sura.name.englishTranscription, name)
  );
}

function searchSuraByArabicName(name) {
  const suraList = [...data.suraList];

  return suraList.filter(
    sura =>
      contains(sura.name.arabic, name)
  );
}

function searchSuraByName(name) {
  const suraList = [...data.suraList];

  return suraList.filter(
    sura =>
      contains(sura.name.arabic, name) ||
      contains(sura.name.bosnian, name) ||
      contains(sura.name.bosnianTranscription, name)
  );
}

function getSuraByIndex(index) {
  return data.suraList.filter(sura => +sura.index === +index)[0];
}

function sortSuraListByFirstPublished() {
  const suraList = [...data.suraList];

  return suraList.sort((a, b) => {
    return a.orderInPublishing - b.orderInPublishing;
  });
}

function sortSuraListByLastPublished() {
  const suraList = [...data.suraList];

  return suraList.sort((a, b) => {
    return b.orderInPublishing - a.orderInPublishing;
  });
}

function getSuraListPublishedInMekka() {
  const suraList = [...data.suraList];

  return suraList.filter(sura => sura.type === "Meccan");
}

function getSuraListPublishedInMedina() {
  const suraList = [...data.suraList];

  return suraList.filter(sura => sura.type === "Medinan");
}

function getSuraListByJuz(juzIndex) {
    const suraListFromJuzlist = data.juzList.filter(juz => +juz.id === +juzIndex).map(item => item.surahs)[0];
    const returnedData = [];
    suraListFromJuzlist.forEach(sura => {
        const suraInfo = getSuraByIndex(sura.id);
        returnedData.push(suraInfo);
    });
    return returnedData;
}

function getJuzList() {
  return data.juzList;
}

function getJuzByIndex(index) {
  return data.juzList.filter(juz => +juz.id === +index)[0];
}

function getNumberOfWordsAndLettersPerPage(page) {
  return data.wordsAndLettersPerPage.filter(item => item.page === +page)[0];
}

//helpers
function contains(item, containsItem) {
  return item.toLowerCase().indexOf(containsItem.toLowerCase()) !== -1;
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
  getJuzByIndex,
  getNumberOfWordsAndLettersPerPage,
  searchSuraByBosnianName,
  searchSuraByEnglishName,
  searchSuraByArabicName
};
