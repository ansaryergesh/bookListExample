import logo from './logo.svg';
import { BrowserRouter, Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import HomeComponent from './pages/HomeComponent';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
function App() {
  return (
    <BrowserRouter >
    <div>
      <Link to={'/'}>Home</Link>
      <div>
      <Link to={'/bookForm'}>BookForm</Link>
      </div>
    </div>
    <Routes>
      <Route path='/' element={<HomeComponent />} />
      <Route path='/bookForm' element={<BookForm />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
