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

function getBooksPossessedByAccount(account, books, authors) {
  let possessedBooks = [];
  books.forEach((book) => {
    const {id, title, genre, borrows} = book;
    borrows.forEach((borrow) => {
      if (borrow.id === account.id && borrow.returned === false) {
        authors.forEach(author => {
          if (author.id == book.authorId) {
            let tempBook = {id, title, genre, author, borrows};
            possessedBooks.push(tempBook);
          }
        })
      }
    })
  })
  return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
