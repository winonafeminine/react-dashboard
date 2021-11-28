import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/contents/home/Home';
import Detail from './components/contents/detail/Detail';
import Contact from './components/contents/contact/Contact';
import About from './components/contents/about/About';
import Products from './components/contents/product/Products';
import ProductDetail from './components/contents/product/ProductDetail';
import Kdetail from './components/contents/contact/kdetail';

function App() {

  return (
    <div className="main">
      <Router>
        <ul className="navbar-group">
          <li className="navbar"><Link to="/" className="btn">Home</Link></li>
          <li className="navbar"><Link to="/product" className="btn">Catsitory</Link></li>
          <li className="navbar"><Link to="/detail" className="btn">Detail</Link></li>
          <li className="navbar"><Link to="/contact" className="btn">KPOP Center</Link></li>
          <li className="navbar"><Link to="/about" className="btn">About</Link></li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/product" element={<Products/>} />
          <Route exact path="/detail" element={<Detail/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/cats/detail" element={<ProductDetail/>} />
          <Route exact path="/kcenter/detail" element={<Kdetail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
