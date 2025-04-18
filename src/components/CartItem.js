import { connect } from "react-redux";
import {
  DELETE_CART,
  INCREMENT_CART,
  DECREMENT_CART,
  HANDLE_IN_CART,
  TOTAL_CART,
} from "../redux/action/type";
import util from "../utility/util";
import { X } from "lucide-react";

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
    <div className="flex w-full h-ful justify-between items-center border-b-[1px] border-gray-900/10 py-2 px-2 md:px-4 gap-1  md:gap-2 ">
      <button onClick={() => remove()}>
        <X className="text-red-500 w-4 h-4 md:w-5 md:h-5" />
      </button>

      <div className="overflow-hidden w-full rounded-md  aspect-[3/2] max-w-[70px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex justify-start flex-col flex-grow items-center md:gap-3 w-auto sm:max-w-[250px] p-2  md:max-w-[350px]">
        <h5 className="text-start w-full font-semibold text-[10px] sm:text-[12px] md:text-[16px]">
          {title}
        </h5>
        <h6 className="text-gray-600 text-sm hidden md:line-clamp-3 mb-4 md:max-h-[999px]">
          {description}
        </h6>
      </div>

      <div className="md:w-[20%]  text-center">
        <h6 className="item-price">{util.formatCurrency(price)}</h6>
      </div>
      <div className="md:w-[100px] flex justify-between flex-col md:flex-row items-center md:gap-2 h-full border-[1px] border-green-300/50 rounded-md p-1 md:px-3">
        <button
          onClick={() => increase()}
          className="bg-white/40 px-[4px] rounded-sm font-semibold md:text-2xl text-md"
        >
          +
        </button>
        <span className="font-bold text-[12] md:text-[16px]">{units}</span>
        <button
          className="bg-white/40 px-[4px] rounded-sm font-semibold md:text-2xl text-md"
          onClick={() => {
            if (units === 1) {
              return remove();
            }
            return decrease();
          }}
        >
          -
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
