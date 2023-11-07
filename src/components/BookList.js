import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderedBook = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });
  return <div>{renderedBook}</div>;
}

export default BookList;
