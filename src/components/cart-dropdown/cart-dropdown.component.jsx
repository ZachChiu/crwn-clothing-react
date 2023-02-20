import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext, createRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import ClickOutsideHandler from "../../utils/clickOutside";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  };
  const ref = createRef();
  const closeCart = () => setIsCartOpen(false);

  ClickOutsideHandler(ref, closeCart);
  return (
    <CartDropdownContainer ref={ref}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}></CartItem>
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
