import { useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import { Eye, Star } from "lucide-react";
import Product from "./Product";
import ReviewBreakdown from "./ReviewBreakdown";
import Header from "./Header";
import Rating from "./Rating";

export default function SingleProduct({
  handleAddProduct,
  handleInCart,
  product,
}) {
  const { id } = useParams();
  let filteredItems = product.filter((prod) => prod.id === parseInt(id));
  const filteredProduct = filteredItems[0];

  return (
    <div className="min-h-screen mx-auto w-full  flex flex-col items-center justify-start bg-white px-4 py-6 mt-6 mb-6  container ">
      <Breadcrumb />
      <div className="w-full  rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10  p-6 mb-12">
        {/* Image Section */}
        <div className="flex flex-col justify-center items-center w-full h-96 max-w-[500px] ">
          <div className="w-full h-95 max-w-[500px] gap-2 flex flex-col items-center justify-center overflow-hidden p-4 bg-gray-10 border-b-[1px] border-gray-200 mb-4 ">
            <img
              src={filteredProduct.image}
              alt={filteredProduct.title}
              className="object-cover w-auto h-full object-top rounded-sm "
            />
          </div>
          <div className=" flex justify-start h-[90px]  w-full px-4">
            <img
              src={filteredProduct.image}
              alt={filteredProduct.title}
              className="object-cover w-[50px] h-[50px] object-top rounded-md"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-between max-w-2xl md:w-full">
          <div>
            <h1 className="text-3xl font-semibold text-[#353E4B] mb-4">
              {filteredProduct.title}
            </h1>
            <div className="flex justify-start items-center  w-full gap-3 mb-6  border-b border-gray-300/60 pb-3  capitalize">
              <Rating
                rate={filteredProduct.rating.rate}
                size="14px"
              />
              <p className="w-auto text-gray-500 text-sm">
                {" "}
                ({filteredProduct.rating.rate})
              </p>
              <span className="text-gray-400 text-sm flex justify-start items-center ">
                Add your review{" "}
                <Eye className="px-2 text-gray-600  w-[30px] h-6" />
                11 {filteredProduct.category}
              </span>
            </div>
            <p className="text-gray-600/90 text-md mb-4 ">
              {filteredProduct.description}
            </p>
          </div>
          <div className="mt-auto">
            <div className="text-2xl font-semibold text-gray-600 mb-4 border-b-[1px] border-gray-200">
              <h5 className="text-2xl font-semibold text-gray-600 mb-4">
                ${filteredProduct.price}
              </h5>
            </div>
            <div className="flex flex-col justify-start items-start mb-6  gap-[5px]">
              <span className="flex justify-start items-center gap-3">
                <label className="font-semibold text-sm text-gray-700 min-w-[90px]">
                  Brand
                </label>
                <p className="text-sm font-extralight text-gray-500">Generic</p>
              </span>
              <span className="flex justify-start items-center gap-3">
                <label className="font-semibold text-sm text-gray-700 min-w-[90px]">
                  {" "}
                  Color
                </label>
                <p className="text-sm font-extralight text-gray-500">Multi</p>
              </span>
              <span className="flex justify-start items-center gap-3">
                <label className="font-semibold text-sm text-gray-700 min-w-[90px] ">
                  {" "}
                  Catagory
                </label>
                <p className="text-sm font-extralight text-gray-500">
                  {filteredProduct.category}
                </p>
              </span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <button className="w-full bg-gray-200 px-4 py-2 rounded-sm text-gray-800 transition duration-200 shadow hover:text-white  hover:bg-gray-400">
                Buy now
              </button>
              <button
                onClick={() => {
                  handleAddProduct({ ...filteredProduct, units: 1 });
                  handleInCart(parseInt(filteredProduct.id));
                }}
                disabled={filteredProduct?.InCart}
                className={` w-full py-2 px-6 ${
                  filteredProduct?.InCart
                    ? "bg-gray-300  hover:bg-gray-400"
                    : "bg-green-400  hover:bg-green-500"
                }  text-white rounded-sm text-lg font-medium transition duration-200 shadow`}
              >
                {filteredProduct?.InCart ? "In cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className=" my-8  flex flex-col justify-start items-center w-full mb-12 px-4">
        <Header
          title="Related Products"
          posssition="center"
        />
        <section className="flex flex-wrap justify-center w-full  gap-2 max-w-2xl md:max-w-full mx-auto p-4 overflow-x-auto ">
          {product
            .filter((item) =>
              item.category.toLowerCase().includes(filteredProduct.category)
            )
            .slice(0, 5)
            .map((res) => (
              <Product
                {...res}
                key={res.id}
                handleAddProduct={handleAddProduct}
                handleInCart={handleInCart}
              />
            ))}
        </section>
      </section>
      <section className=" my-8  flex flex-col justify-start items-center w-full mb-12  px-4">
        <Header
          title="Reviews(0)"
          posssition="center"
        />
        <span className="flex justify-start items-start w-full max-w-[800px] gap-2 mb-6 px-4">
          <Star className="text-green-500 fill-green-500" />

          <h1 className="font-semibold text-lg text-left ">User Reviews</h1>
        </span>
        <ReviewBreakdown />
        <span className="font-medium p-4">
          Be the first to review “{product.title}”
        </span>
      </section>
    </div>
  );
}
