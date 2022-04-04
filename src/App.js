import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import Error from './Components/Error/Error';

function App() {
  return (
    <div className="App">
       <nav>
            <Link  className='menu-link' to='/home'>Home</Link>
            <Link className='menu-link' to='/reviews'>Reviews</Link>
            <Link className='menu-link' to='/dashboard'>Dashboard</Link>
            <Link className='menu-link' to='/blogs'>Blogs</Link>
            <Link className='menu-link' to='/about'>About</Link>
            </nav>
      <Routes>
        <Route  path='/' element={<Home></Home>}></Route>
        <Route  path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
