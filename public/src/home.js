function totalBooksCount(books) {
  let result = 0;
  books.forEach(book => result++);
  return result;
}

function totalAccountsCount(accounts) {
  let result = 0;
  accounts.forEach(account => result++)
  return result;
}

function booksBorrowedCount(books) {
  let result = 0;
  for (let book in books){
    if (!books[book].borrows[0].returned) {
      result += 1;
    }
  }
  return result;
}

function getMostCommonGenres(books) {
  let allGenres = books.map((book) => book.genre);
  let allCommonGenres = allGenres.reduce((acc, genre) => {
    acc[genre] ? acc[genre]++ : (acc[genre] = 1);
    return acc;
  }, {});
  let commonGenres = [];
  for (const key in allCommonGenres) {
    const element = allCommonGenres[key];
    let newObj = {};
    newObj["name"] = key;
    newObj["count"] = element;
    commonGenres.push(newObj);
  }
  let result = commonGenres.sort((genreA,genreB) => {
    if (genreA.count > genreB.count) return -1;
    if (genreA.count < genreB.count) return 1;
    return 0;
  })
  return result.slice(0,5);
}

function getMostPopularBooks(books) {
  let allPopularBooks = books.map((book) => ({name: book.title, count: book.borrows.length}));
  let result = allPopularBooks.sort((bookA,bookB) => {
    if (bookA.count > bookB.count) return -1;
    if (bookA.count < bookB.count) return 1;
    return 0;
  })
  return result.slice(0,5);let allBooks = books.map((book) => ({name: book.title, count: book.borrows.length}));
}

function getMostPopularAuthors(books, authors) {
  let allPopularAuthors = [];
  let allAuthors = books.reduce((acc, book) => {
    acc[book.authorId] ? (acc[book.authorId] += book.borrows.length) : (acc[book.authorId] = book.borrows.length);
    return acc;
  }, {});
  function findAuthorsNameById(authors, id) {
    let authorName = '';
    authors.forEach((author) => {
    if (author.id === id) { 
      authorName = `${author.name.first} ${author.name.last}`;
    }
  });
  return authorName;
  }
  for (const key in allAuthors) {
    const element = allAuthors[key];
    let newObj = {};
    newObj["name"] = findAuthorsNameById(authors, parseInt(key));
    newObj["count"] = element;
    allPopularAuthors.push(newObj);
  }
  let result = allPopularAuthors.sort((authorA,authorB) => {
    if (authorA.count > authorB.count) return -1;
    if (authorA.count < authorB.count) return 1;
    return 0;
  })
  return result.slice(0,5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
