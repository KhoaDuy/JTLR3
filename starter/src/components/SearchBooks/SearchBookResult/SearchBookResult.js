import { useEffect, useState } from "react";
import { search } from "../../../BooksAPI";
import Books from "../../Books/Books";
import "../SearchBookResult/SearchBookResult.css";
function SearchBookResult({ title, numberOfBooks }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let isMounted = true;
  
    if (title !== "") {
      search(title, numberOfBooks)
        .then((res) => {
          if (isMounted) {
            setBooks(res);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setBooks([]);
    }
  
    return () => {
      isMounted = false;
    };
  }, [title, numberOfBooks]);
  
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {books && books.length > 0 ? (
          <Books search={books} shelf="none" ></Books>
        ) : (
          <p>No books found.</p>
        )}
      </ol>
    </div>
  );
}

export default SearchBookResult;
