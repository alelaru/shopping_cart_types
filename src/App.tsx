import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCartRounded } from "@material-ui/icons";
import { useState } from "react";
import { useQuery } from "react-query";
import { StyledButton, Wrapper } from "./App.styles";
import Cart from "./components/cart/cart";

//Components
import Item from "./components/item/item";


export type CartItemType = {
  id: number,
  category: string, 
  description: string,
  price: number,
  image: string,
  title: string,
  amount: number
}

const getProducts = async (): Promise<CartItemType[]> => 
   await(await fetch("https://fakestoreapi.com/products")).json();

function App() {

  const [cartOpen, setcartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([] as CartItemType[]);

  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products', 
    getProducts
  )
  
  console.log(data);
  
  const getTotalItems = (items: CartItemType[]) => 
    items.reduce((ack:number, item) => ack + item.amount, 0)

  const handleAddToCart = ( clickedItem: CartItemType) => null;

  const removeFromCart = () => null;

  if(isLoading) return <LinearProgress/>
  if(error) return <div>Something went wrong</div>
  
  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setcartOpen(false)}>
        <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart} 
          removeFromCart={removeFromCart}>
        </Cart>
      </Drawer>
      <StyledButton onClick={() => setcartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartRounded/>
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(itemCart => (
          <Grid item key={itemCart.id} xs={12} sm={4}>
            <Item item={itemCart} handleAddToCart={handleAddToCart}></Item>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;


////https://www.youtube.com/watch?v=sfmL6bGbiN8&ab_channel=freeCodeCamp.org