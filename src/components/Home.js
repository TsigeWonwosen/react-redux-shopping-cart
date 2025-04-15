import "../styles/Home.scss";
import ProductCard from "../components/Product";
import categories from "../data/Data.json";
import featuredProducts from "../data/Data.json";
import Catagory from "./Category";
const Home = () => {
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
          <div className="hero-categories__grid">
            {categories.slice(0, 6).map((cat) => (
              <ProductCard
                key={cat.id}
                {...cat}
              />
            ))}
          </div>
        </section>
        {/* choose of best catagories */}
        <section className="best-categories">
          <p>Looking for Best products</p>
          <h2 className="section-title">Choose of Best category</h2>
          <div className="best-categories__grid">
            {categories.slice(6, 12).map((cat) => (
              <Catagory
                key={cat.id}
                {...cat}
              />
            ))}
          </div>
        </section>
        {/* Featured */}
        <section className="hero-featured">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-grid">
            {featuredProducts.slice(14, 20).map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
