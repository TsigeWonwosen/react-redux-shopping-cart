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
    <div className="flex w-full justify-between items-center border-b-[1px] border-gray-900/10 py-2 px-4 gap-2">
      <button onClick={() => remove()}>
        <X className="text-red-500 w-5 h-5" />
      </button>
      <img
        src={image}
        alt={title}
        className="h-[30px] w-[40px] md:h-[70px] md:w-[60px]object-cover object-top rounded-md"
      />
      <div className="flex justify-start flex-col items-center gap-3 max-w-[250px] p-2  md:max-w-[350px]">
        <h5 className="text-start w-full font-semibold">{title}</h5>
        <h6 className=" hidden md:block line-clamp-3 text-sm font-light">
          {description}
        </h6>
      </div>

      <div className="w-[20%]  text-center">
        <h6 className="item-price">{util.formatCurrency(price)}</h6>
      </div>
      <div className="md:w-[100px] flex justify-between flex-col md:flex-row items-center md:gap-2 h-full border-[1px] border-green-300/50 rounded-md p-1 md:px-3">
        <button
          onClick={() => increase()}
          className="bg-white/40 px-[4px] rounded-sm font-semibold text-2xl"
        >
          +
        </button>
        <span className="font-bold text-[16px]">{units}</span>
        <button
          className="bg-white/40 px-[4px] rounded-sm font-semibold text-2xl"
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
