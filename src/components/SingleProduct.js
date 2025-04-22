import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import { Eye, Star } from "lucide-react";
import Product from "./Product";
import ReviewBreakdown from "./ReviewBreakdown";

export default function SingleProduct({
  handleAddProduct,
  handleInCart,
  product,
}) {
  const { id } = useParams();
  let filteredItems = product.filter((prod) => prod.id === parseInt(id));
  const filteredProduct = filteredItems[0];

  return (
    <div className="min-h-screen  w-full mx-auto flex flex-col items-center justify-start bg-gray-50 px-4 py-10 mt-9 mb-6">
      <Breadcrumb />
      <div className="container w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mb-12">
        {/* Image Section */}
        <div className="max-w-2xl w-full h-96  bg-gray-100 flex items-center justify-center rounded-xl overflow-hidden">
          <img
            src={filteredProduct.image}
            alt={filteredProduct.title}
            className="object-cover w-full h-full object-top"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-between max-w-2xl md:w-full">
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              {filteredProduct.title}
            </h1>
            <span className="text-gray-400 text-sm mb-6 w-full flex justify-start items-center border-b border-gray-300/60 pb-3  capitalize">
              Add your review{" "}
              <Eye className="px-2 text-gray-600  w-[30px] h-6" />
              11 {filteredProduct.category}
            </span>
            <p className="text-gray-600 text-lg mb-6 ">
              {filteredProduct.description}
            </p>
          </div>
          <div className="mt-auto">
            <div className="text-2xl font-semibold text-green-400 mb-4">
              ${filteredProduct.price}
            </div>
            <button
              onClick={() => {
                handleAddProduct({ ...filteredProduct });
                handleInCart(parseInt(filteredProduct.id));
              }}
              disabled={filteredProduct?.InCart}
              className={`w-full py-3 px-6 ${
                filteredProduct?.InCart
                  ? "bg-gray-300  hover:bg-gray-400"
                  : "bg-green-500  hover:bg-green-700"
              }  text-white rounded-xl text-lg font-medium transition duration-200 shadow`}
            >
              {filteredProduct?.InCart ? "In cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
      <section className=" my-8  flex flex-col justify-start items-start w-full mb-12">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 px-4">
          Related Products
        </h1>
        <section className="flex flex-wrap justify-center w-full  gap-2 max-w-2xl md:max-w-full mx-auto p-4 overflow-x-auto ">
          {product
            .filter((item) =>
              item.category.toLowerCase().includes(filteredProduct.category)
            )
            .slice(0, 6)
            .map((res) => (
              <Product
                {...res}
                key={res.id}
              />
            ))}
        </section>
      </section>
      <section className=" my-8  flex flex-col justify-start items-start w-full mb-12">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 px-4">
          Reviews(0)
        </h1>
        <span className="flex justify-start items-center gap-2 mb-6 px-4">
          <Star className="text-green-500" />

          <h1 className="font-semibold text-lg">User Reviews</h1>
        </span>
        <ReviewBreakdown />
        <span className="font-medium p-4">
          Be the first to review “{product.title}”
        </span>
      </section>
    </div>
  );
}
