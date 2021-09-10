import { Button } from "@material-ui/core";
import { CartItemType } from "../../App";
import { Wrapper } from "./item.styles";

interface ItemProps {
    item: CartItemType,
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<ItemProps> = ({ item, handleAddToCart}) => {
  return <Wrapper>
      <img src={item.image} alt={item.title}></img>
      <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
  </Wrapper>
}

export default Item;