import BooksheftsBook from "./BooksheftsBook/BooksheftsBook";

function Bookshefts({data,setter}){

    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{data.title}</h2>
              <BooksheftsBook data={data} setter={setter} />
              </div>
    )
}
export default Bookshefts