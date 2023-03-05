import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Wrap,
  Value,
} from "./checkout-item.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemToCart,
} from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";
const CheckoutItem = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItem = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItem = () => dispatch(removeItemToCart(cartItems, cartItem));

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
