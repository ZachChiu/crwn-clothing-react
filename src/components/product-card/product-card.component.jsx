import {
  Footer,
  Img,
  Name,
  Price,
  ProductCardContainer,
  Button,
} from "./product-card.styles.jsx";
import { setIsCartOpen, addItemToCart } from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(setIsCartOpen(true));
    dispatch(addItemToCart(cartItems, product));
  };
  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={name} />

      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button onClick={addProductToCart}>Add to Cart</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
