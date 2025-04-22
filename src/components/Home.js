import "../styles/Home.scss";
import ProductCard from "../components/Product";
// import categories from "../data/Data.json";
// import featuredProducts from "../data/Data.json";
import Catagory from "./Category";
// import { handleCart } from "../redux/action/cartAction";
const Home = ({ handleAddProduct, handleInCart, product }) => {
  return (
    <>
      <div className="home">
        {/* Hero */}
        <section className="hero">
          <div className="hero__content">
            <h1>Welcome to The Ethiopian</h1>
            <p>Fashion for men, women, kids, and top-notch electronics.</p>
            <button className="hero__btn">Explore Now</button>
          </div>
        </section>

        {/* Categories */}
        <section className="hero-categories">
          <h2 className="section-title">Shop by Category</h2>
          <div className="hero-grid">
            {product.slice(0, 6).map((cat) => (
              <ProductCard
                key={cat.id}
                {...cat}
                handleAddProduct={handleAddProduct}
                handleInCart={handleInCart}
              />
            ))}
          </div>
        </section>
        {/* choose of best catagories */}
        <section className="best-categories">
          <p>Looking for Best products</p>
          <h2 className="section-title">Choose of Best category</h2>
          <div className="best-grid">
            {product.slice(6, 12).map((cat) => (
              <Catagory
                key={cat.id}
                {...cat}
                handleAddProduct={handleAddProduct}
                handleInCart={handleInCart}
              />
            ))}
          </div>
        </section>
        {/* Featured */}
        <section className="hero-featured">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-grid">
            {product.slice(14, 20).map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                handleAddProduct={handleAddProduct}
                handleInCart={handleInCart}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
