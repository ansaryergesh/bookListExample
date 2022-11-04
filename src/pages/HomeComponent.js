import { useState } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

function HomeComponent() {
    const [counter, setCounter] = useState(0)
    const [books,setBooks] = useState([{
        title: "title",
        author:"author",
        description:"description",
        status:"read"
    },
    {
      title: "title2",
      author:"author2",
      description:"description2",
      status:"unread"
  }])
    const [book,setBook] = useState({
        index: "",
        title: "",
        author:"",
        description:"",
        status:"read"
    });
    const [edit,setEdit] = useState(false);

    return (
      <div className="App">
        <BookList
            books ={books}
            setBooks={setBooks}
            edit={edit}
            setEdit={setEdit}
            book={book}
            setBook={setBook}/>
        <BookForm
            setBooks={setBooks}
            books={books}
            edit={edit}
            setEdit={setEdit}
            book={book}
            setBook={setBook}/>
      </div>
    );
  }
  
  export default HomeComponent;
  