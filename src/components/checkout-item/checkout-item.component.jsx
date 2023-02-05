import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const clearItem = () => clearItemFromCart(cartItem);
  const addItem = () => addItemToCart(cartItem);
  const removeItem = () => removeItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <div className="name"> {cartItem.name}</div>
      <div className="quantity">
        <span className="arrow" onClick={removeItem}>
          &#10094;
        </span>
        <span className="value">{cartItem.quantity}</span>
        <span className="arrow" onClick={addItem}>
          &#10095;
        </span>
      </div>
      <div className="price"> {cartItem.price}</div>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
