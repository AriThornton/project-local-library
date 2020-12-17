function findAccountById(accounts, id) {
  let accountById = {};
  let result = accounts.filter((account) => {
    if (account.id === id) {
      accountById = account
    }
  });
  return accountById;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((name1, name2) => name1.name.last.toLowerCase() > name2.name.last.toLowerCase() ? 1 : -1);
}

function numberOfBorrows(account, books) {
  let result = 0;
  for (let index in books) {
    if (books[index].borrows.find((idx) => idx.id === account.id)) {
      result += 1;
    }
  }
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {let possessedBooks = [];
  for (let i = 0;i < books.length; i++) {
    let book = books[i];
    const {id, title, genre, borrows} = book;
    for (let j = 0; j < borrows.length; j++) {
      if (borrows[j].id === account.id && borrows[j].returned === false) {
        for (let k = 0; k < authors.length; k++) {
          let author = authors[k];
          if (author.id == book.authorId) {
            let tempBook = {id, title, genre, author, borrows};
            possessedBooks.push(tempBook);
          }
        }
      }
    }
  }
  return possessedBooks;}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
