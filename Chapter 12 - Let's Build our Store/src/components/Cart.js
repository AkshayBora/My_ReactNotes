import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { incrementItem, decrementItem, clearCart } from "../utils/cartSlice";
import EmptyCart from "../Images/EmptyCart.jpg";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  // const removeItem = (id) => dispatch(removeFromCart({ id }));
  const decrementItemQuantity = (id) => dispatch(decrementItem({ id }));
  const incrementItemQuantity = (id) => dispatch(incrementItem({ id }));

  return (
    <section className="md:flex md:justify-center  w-10/12 mx-auto md:my-5 md:flex-wrap gap-5">
      <div className="md:w-7/12">
        {cartItems.length < 1 ? (
          <div className="flex flex-col justify-center items-center md:my-0 gap-2 mb-4 w-12/12">
            <img
              className="scale-105 h-72 md:h-80 p-2 mt-4"
              src={EmptyCart}
              alt="Empty Cart"
            />
            <h1 className="text-lg md:text-xl font-bold text-slate-600">
              Your cart is empty
            </h1>
            <p className="ml-2 text-base md:text-lg font-normal text-slate-500">
              You can go to home page to view more restaurants
            </p>
            <Link to="/">
              <button
                className="middle none center rounded-lg bg-orange-500 py-2 md:py-2 px-4 md:px-4 font-sans text-base md:text-xl sm:font-semibold md:font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md-2 md:m-2"
                data-ripple-light="true"
              >
                See Restaurants near you{" "}
                <i className="fa-solid fa-cart-shopping px-2"></i>
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex justify-between py-2 my-2 text-lg items-center ">
            <p className="text-lg text-[#3F4255] uppercase font-bold">
              Your Cart
            </p>
            <button
              disabled={cartItems.length > 0 ? false : true}
              className="text-normal bg-red-500 text-white px-2 py-1 rounded-lg"
              onClick={() => dispatch(clearCart())}
            >
              Clear cart
            </button>
          </div>
        )}

        {cartItems.map((item) => (
          <div
            key={item?.item?.card?.info?.id}
            className="flex flex-wrap gap-4 justify-evenly my-2 items-center shadow-lg rounded-lg p-2"
          >
            <img
              className="w-32 h-20 object-cover rounded-md"
              src={CDN_URL + item?.item?.card?.info?.imageId}
            />
            <div className="md:w-1/3 text-md ">
              <p className="font-bold">{item?.item?.card?.info?.name}</p>

              <p className="">
                Rs.{" "}
                {(
                  item?.item?.card?.info?.price / 100 ||
                  item?.item?.card?.info?.defaultPrice / 100
                ).toFixed(2)}{" "}
              </p>
              <p className="my-2 font-bold text-lg">
                Total price:{" "}
                {(
                  (item.quantity * item?.item?.card?.info?.price) / 100 ||
                  (item.quantity * item?.item?.card?.info?.defaultPrice) / 100
                ).toFixed(2)}
              </p>
            </div>
            <div>
              <button
                className="bg-gray-900 text-white px-2"
                onClick={() =>
                  decrementItemQuantity(item?.item?.card?.info?.id)
                }
              >
                -
              </button>
              <span className="mx-2">{item?.quantity}</span>
              <button
                className="bg-gray-900 text-white px-2"
                onClick={() =>
                  incrementItemQuantity(item?.item?.card?.info?.id)
                }
              >
                +
              </button>
              <p className="my-2 font-bold"></p>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length == 0 ? null : (
        <div className="flex flex-col justify-center items-center md:w-1/3 w-full pl-2 md:border-l-2 md:border-gray-200 ">
          <p className="my-2 py-2 text-xl font-bold">
            Total price: Rs.{" "}
            {cartItems.length &&
              cartItems
                .map(
                  (item) =>
                    (item.quantity * item?.item?.card?.info?.price) / 100 ||
                    (item.quantity * item?.item?.card?.info?.defaultPrice) / 100
                )
                .reduce((acc, curr) => acc + curr, 0)
                .toFixed(2)}
          </p>
          <button className="px-2 py-1 bg-gray-900 text-white hover:bg-white hover:text-gray-900 hover:border-2 hover:border-gray-900">
            Checkout&nbsp;&nbsp;&nbsp;
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;
