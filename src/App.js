import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import BookListPage from "./BookListPage";
import BookSinglePage from "./BookSinglePage";
import BookPostPage from "./BookPostPage";
import BookPutPage from "./BookPutPage";
import BookDeletePage from "./BookDeletePage";

function App() {
  return (
    <Router>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink to={`/`} className='nav-link'>
                <span className='nav-link'>Könyvek</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to={`/uj-konyv`} className='nav-link'>
                <span className='nav-link'>Új könyv</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={ <BookListPage/> }/>
        <Route path='/konyv/:id' element={ <BookSinglePage/> }/>
        <Route path='/uj-konyv' element={ <BookPostPage/> }/>
        <Route path='/mod-konyv/:id' element={ <BookPutPage/> }/>
        <Route path='/delete-konyv/:id' element={ <BookDeletePage/> }/>
      </Routes>
    </Router>
  );
}

export default App;
