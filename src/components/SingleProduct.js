import { useParams } from "react-router-dom";
import productDatas from "../data/Data.json";
import Breadcrumb from "./Breadcrumb";

export default function SingleProduct({ handleAddProduct, handleInCart }) {
  const { id } = useParams();
  let filteredItems = productDatas.filter((prod) => prod.id === parseInt(id));
  const product = filteredItems[0];

  return (
    <div className="min-h-screen  mx-auto flex flex-col items-left justify-start bg-gray-50 px-4 py-10 mt-9 ">
      <Breadcrumb />
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Image Section */}
        <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded-xl overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full object-top"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>
          </div>
          <div className="mt-auto">
            <div className="text-2xl font-semibold text-green-600 mb-4">
              ${product.price}
            </div>
            <button
              onClick={() => {
                handleAddProduct({ ...product });
                // handleInCart(id);
              }}
              className="w-full py-3 px-6 bg-green-600 text-white rounded-xl text-lg font-medium hover:bg-green-700 transition duration-200 shadow"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
