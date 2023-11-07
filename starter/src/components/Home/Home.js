import ListBooks from "../Bookshefts/ListBooks/ListBooks";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAll }from "../../BooksAPI"
import "../Home/Home.css";
function Home() {
    const dataBooks = [
        {
            title: "Current Reading",
            shelf: "currentlyReading",
            books: [],
        },
        {
            title: "Want To Read",
            shelf: "wantToRead",
            books: [],
        },
        {
            title: "Read",
            shelf: "read",
            books: [],
        },
    ];

    const [listShelf, setListShelf] = useState(dataBooks);
    const [update, setUpdate] = useState(true); 
    useEffect(() => {
        getAll()
            .then((res) => {
                const newListShelf = listShelf.map((shelf) => {
                    const newBooks = res.filter((book) => book.shelf === shelf.shelf);
                    return { ...shelf, books: newBooks };
                });
                setListShelf(newListShelf);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [update]);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {listShelf.map((shelf, index) => (
                <ListBooks key={index} data={shelf} setter={[update, setUpdate]} />
            ))}
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

export default Home;
