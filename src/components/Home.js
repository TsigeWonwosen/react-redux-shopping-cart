import "../styles/Home.scss";
import ProductCard from "../components/Product";
// import categories from "../data/Data.json";
// import featuredProducts from "../data/Data.json";
import Catagory from "./Category";
import Header from "./Header";
import HeroCarousel from "./Carousel";
// import { handleCart } from "../redux/action/cartAction";
const Home = ({ handleAddProduct, handleInCart, product }) => {
  return (
    <>
      <div className="home flex flex-col justify-start items-start w-full max-w-screen-xl mx-auto mt-6">
        {/* Hero */}
        <HeroCarousel />

        {/* Categories */}
        <section className="hero-categories w-full">
          <Header title="Popular products" />
          <div className="hero-grid">
            {product.slice(0, 5).map((cat) => (
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
          <Header title="Featured Products" />
          <div className="product-grid">
            {product.slice(14, 19).map((product) => (
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
