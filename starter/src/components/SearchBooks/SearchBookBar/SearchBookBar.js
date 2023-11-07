import { useEffect, useState } from "react";
import SearchBookResult from "../SearchBookResult/SearchBookResult";
import { Link } from "react-router-dom";
import "../SearchBookBar/SearchBookBar.css";
function SearchBookBar(){

  const [title, setTitle] = useState("");
  const [numberOfBooks, setNumberOfBooks] = useState(20);
  return(
    <>
          <div className="search-books-bar">
            <Link to="/"
              className="close-search"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text" className="nameBook"
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          
    <SearchBookResult title={title} numberOfBooks={numberOfBooks}></SearchBookResult>
        </>
    )
}
export default SearchBookBar