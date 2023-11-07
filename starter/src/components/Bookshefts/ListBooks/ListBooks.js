import Bookshefts from "../Bookshefts";
function ListBooks({ data, setter }) {
    return (
        <div className="list-books-content">
            <div>
                <Bookshefts data={data} setter={setter} />
            </div>
        </div>
    );
}
export default ListBooks;
