import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ItCenter from './components/contents/IT/ItCenter';
import ItDetail from './components/contents/IT/ItDetail';
import Carts from './components/contents/IT/Carts';
import Detail from './components/contents/detail/Detail';
import Contact from './components/contents/kpopcenter/Kpopcenter';
import Clothes from './components/contents/Clothes/Clothes';
import Kdetail from './components/contents/kpopcenter/kdetail';
import Cat from './components/contents/cat/Cat';
import CatDetail from './components/contents/cat/CatDetail';
import Dtdetail from './components/contents/detail/Dtdetail';
import ProductDetail1 from './components/contents/Clothes/ProductDetail1';
import Dashbor from './components/contents/dashBor/Dashbor';
function App() {

  return (
    <div className="main">
      <Router>
        <ul className="navbar-group">
          <li className="navbar"><Link to="/IT" className="btn">IT Center</Link></li>
          <li className="navbar"><Link to="/cat" className="btn">Catsitory</Link></li>
          <li className="navbar"><Link to="/contact" className="btn">KPOP Center</Link></li>
          <li className="navbar"><Link to="/detail" className="btn">Sweater</Link></li>
          <li className="navbar"><Link to="/Clothes" className="btn">Clothes</Link></li>
          <li className="navbar"><Link to="/DashBor" className="btn">dashBor</Link></li>
        </ul>
        <Routes>
          <Route exact path="/IT" element={<ItCenter />} />
          <Route exact path="/it/detail" element={<ItDetail />} />
          <Route exact path="/it/carts-item" element={<Carts />} />
          <Route exact path="/cat" element={<Cat/>} />
          <Route exact path="/detail" element={<Detail/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/Clothes" element={<Clothes/>} />
          <Route exact path="/cats/detail" element={<CatDetail/>} />
          <Route exact path="/kcenter/detail" element={<Kdetail/>} />
          <Route exact path="/suha/sweater" element={<Dtdetail/>} />
          <Route exact path="/clot/detail" element={<ProductDetail1/>} />
          <Route exact path="/dashBor" element={<Dashbor/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
