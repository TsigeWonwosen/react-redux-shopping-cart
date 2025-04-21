import { useParams } from "react-router-dom";
import productDatas from "../data/Data.json";
import Breadcrumb from "./Breadcrumb";
import { Eye, Star } from "lucide-react";
import Product from "./Product";
import ReviewBreakdown from "./ReviewBreakdown";

export default function SingleProduct({ handleAddProduct, handleInCart }) {
  const { id } = useParams();
  let filteredItems = productDatas.filter((prod) => prod.id === parseInt(id));
  const product = filteredItems[0];

  return (
    <div className="min-h-screen  mx-auto flex flex-col items-center justify-start bg-gray-50 px-4 py-10 mt-9 mb-6">
      <Breadcrumb />
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mb-12">
        {/* Image Section */}
        <div className="w-full h-96 max-w-md bg-gray-100 flex items-center justify-center rounded-xl overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full object-top"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-between max-w-md md:w-full">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              {product.title}
            </h1>
            <span className="text-gray-400 text-sm mb-6 w-full flex justify-start items-center border-b border-gray-300/60 pb-3  capitalize">
              Add your review{" "}
              <Eye className="px-2 text-gray-600  w-[30px] h-6" />
              11 {product.category}
            </span>
            <p className="text-gray-600 text-lg mb-6 ">{product.description}</p>
          </div>
          <div className="mt-auto">
            <div className="text-2xl font-semibold text-green-400 mb-4">
              ${product.price}
            </div>
            <button
              onClick={() => {
                handleAddProduct({ ...product });
                // handleInCart(id);
              }}
              className="w-full py-3 px-6 bg-green-500 text-white rounded-xl text-lg font-medium hover:bg-green-700 transition duration-200 shadow"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <section className="max-w-5xl my-8  flex flex-col justify-start items-start w-full mb-12">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Related Products
        </h1>
        <section className="flex flex-wrap justify-center  gap-1 max-w-md md:max-w-full mx-auto">
          {productDatas
            .filter((item) =>
              item.category.toLowerCase().includes(product.category)
            )
            .slice(0, 6)
            .map((res) => (
              <Product {...res} />
            ))}
        </section>
      </section>
      <section className="max-w-5xl my-8  flex flex-col justify-start items-start w-full mb-12">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Reviews(0)
        </h1>
        <span className="flex justify-start items-center gap-2 mb-6">
          <Star className="text-green-500" />

          <h1 className="font-semibold text-lg">User Reviews</h1>
        </span>
        <ReviewBreakdown />
        <span className="font-medium py-4">
          Be the first to review “{product.title}”
        </span>
      </section>
    </div>
  );
}
