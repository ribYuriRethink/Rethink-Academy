import database from "../model/booksDatabase";

type BookDatabase = {
  id: number;
  author: string;
  title: string;
  isbn: string;
};

type Books = {
  title: string;
  isbn: string;
};

const searchByAuthor = async (author: string) => {
  const book: BookDatabase[] = await database.show("author", author);
  const bookOutput: Books[] = book.map((item: BookDatabase) => ({
    title: item.title,
    isbn: item.isbn,
  }));
  return bookOutput;
};

export default { searchByAuthor };
