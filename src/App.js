import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  const [counter, setCounter] = useState(0)
  const [books,setBooks] = useState([{
      title: "title",
      author:"author",
      description:"description",
      status:"status"
  },
  {
    title: "title2",
    author:"author2",
    description:"description2",
    status:"status2"
}])
  return (
    <div className="App">
      <BookList books ={books} setBooks={setBooks} />
      <BookForm setBooks={setBooks} books={books}/>
    </div>
  );
}

export default App;
