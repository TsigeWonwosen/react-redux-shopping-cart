import { connect } from "react-redux";
import {
  DELETE_CART,
  INCREMENT_CART,
  DECREMENT_CART,
  HANDLE_IN_CART,
  TOTAL_CART,
} from "../redux/action/type";
import util from "../utility/util";
import { Minus, Plus, Trash, X } from "lucide-react";

const CartItem = ({
  image,
  price,
  title,
  description,
  total,
  units,
  increase,
  decrease,
  remove,
}) => {
  const itemRender = () => (
    <div className="flex w-full h-full justify-between items-center border-b-[1px] border-gray-900/10 py-2 px-1 md:px-4   md:gap-2 ">
      <button
        onClick={() => remove()}
        className="md:w-[30px]"
      >
        <X className="text-red-500  w-4  h-5" />
      </button>

      <div className="overflow-hidden w-[50px] rounded-md  aspect-[3/2] md:max-w-[10%]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex justify-start flex-col flex-grow items-center md:gap-3 w-auto md:max-w-[40%] p-2  max-w-[25%]">
        <h5 className="text-start w-full font-semibold text-[10px] sm:text-[12px] md:text-[16px]">
          {title}
        </h5>
        <h6 className="text-gray-600 text-sm hidden md:line-clamp-3 mb-4 md:max-h-[999px]">
          {description}
        </h6>
      </div>

      <div className="w-[50px] md:w-[10%]  text-center">
        <h6 className="item-price">{util.formatCurrency(price)}</h6>
      </div>
      <div className="w-[11%] flex justify-center  items-center gap-[3px] md:gap-2 h-auto md:h-[25px] flex-col md:flex-row">
        <button
          className="text-gray-500 px-[2px]  py-[2px] font-medium md:text-2xl text-md transition-all duration-200 border-[1px] border-gray-300/50 rounded-md"
          onClick={() => {
            if (units === 1) {
              return remove();
            }
            return decrease();
          }}
        >
          {units === 1 ? (
            <Trash className="w-4 h-4 text-red-400  hover:text-red-500" />
          ) : (
            <Minus className="w-4 h-4 text-green-400  hover:text-green-600" />
          )}
        </button>

        <span className="font-bold text-[12] md:text-[14px] flex justify-center items-center">
          {units}
        </span>
        <button
          onClick={() => increase()}
          className="text-gray-500 px-[2px] py-[2px] font-medium md:text-2xl text-md hover:text-green-400 transition-all duration-200 border-[1px] border-gray-300/50 rounded-md"
        >
          <Plus className="w-4 h-4 text-green-400  hover:text-green-600" />
        </button>
      </div>
      <div className="w-[10%] flex justify-end items-center ">
        <h6 className="item-price">{util.formatCurrency(total)}</h6>
      </div>
    </div>
  );
  return <div>{itemRender()}</div>;
};

function mapStateToProps(store) {
  return {
    carT: store.cart.cart,
    totalPrice: store.cart.totalPrice,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, units } = ownProps;
  return {
    increase: () => {
      dispatch({ type: INCREMENT_CART, payload: id });
      dispatch({ type: TOTAL_CART });
    },
    decrease: () => {
      dispatch({ type: DECREMENT_CART, payload: { id, units } });
      dispatch({ type: TOTAL_CART });
    },
    remove: () => {
      dispatch({ type: DELETE_CART, payload: id });
      dispatch({ type: HANDLE_IN_CART, payload: id });
      dispatch({ type: TOTAL_CART });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
