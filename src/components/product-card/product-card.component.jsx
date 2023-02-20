import {
  Footer,
  Img,
  Name,
  Price,
  ProductCardContainer,
  Button,
} from "./product-card.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart, setIsCartOpen } = useContext(CartContext);

  const addProductToCart = () => {
    setIsCartOpen(true);
    addItemToCart(product);
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
