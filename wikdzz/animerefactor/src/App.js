import "./App.css";
import "./index.css";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import Product from "./product";
import Hero from "./Hero";
function App() {
  return (
    <div className="App ">
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Product /> */}

      {/* <Footer /> */}

      <div className="product__item ">
        <div
          className="product__item__pic set-bg"
          data-setbg="../img/trending/trend-1.jpg"
        >
          <div className="ep">18 / 18</div>
          <div className="comment">
            <i className="fa fa-comments"></i> 11
          </div>
          <div className="view">
            <i className="fa fa-eye"></i> 9141
          </div>
        </div>
        <div className="product__item__text">
          <ul>
            <li>Active</li>
            <li>Movie</li>
          </ul>
          <h5>
            <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default App;
