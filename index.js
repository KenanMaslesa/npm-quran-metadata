const data = require("./data");

function getSuraList() {
  return data.suraList;
}

function searchSuraByName(name) {
  return data.suraList.filter(
    sura =>
      contains(sura.name, name) ||
      contains(sura.tname, name) ||
      contains(sura.ename, name) ||
      contains(sura.bosnian.translation, name) ||
      contains(sura.bosnian.name, name)
  );
}

function getSuraByIndex(index) {
  return data.suraList.filter(sura => +sura.index === +index)[0];
}

function sortSuraListByFirstPublished() {
  return data.suraList.sort((a, b) => {
    return a.order - b.order;
  });
}

function sortSuraListByLastPublished() {
  return data.suraList.sort((a, b) => {
    return b.order - a.order;
  });
}

function getSuraListPublishedInMekka() {
  return data.suraList.filter(sura => sura.type === "Meccan");
}

function getSuraListPublishedInMedina() {
  return data.suraList.filter(sura => sura.type === "Medinan");
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
  getNumberOfWordsAndLettersPerPage
};
