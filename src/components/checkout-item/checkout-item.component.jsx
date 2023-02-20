import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Wrap,
  Value,
} from "./checkout-item.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const clearItem = () => clearItemFromCart(cartItem);
  const addItem = () => addItemToCart(cartItem);
  const removeItem = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </ImageContainer>
      <Wrap> {cartItem.name} </Wrap>
      <Quantity>
        <Arrow onClick={removeItem}>&#10094;</Arrow>
        <Value>{cartItem.quantity}</Value>
        <Arrow onClick={addItem}>&#10095;</Arrow>
      </Quantity>
      <Wrap> {cartItem.price} </Wrap>
      <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
