import Books from "../../Books/Books";
import "../BooksheftsBook/BooksheftsBook.css"
function BooksheftsBook({ data, setter }) {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                <Books data={data} setter={setter}></Books>
            </ol>
        </div>
    );
}
export default BooksheftsBook;
