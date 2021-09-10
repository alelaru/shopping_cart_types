import { Grid, LinearProgress } from "@material-ui/core";
import { useQuery } from "react-query";
import { Wrapper } from "./App.styles";

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

  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products', 
    getProducts
  )
  
  console.log(data);
  
  const getTotalItems = () => null;

  const handleAddToCart = ( clickedItem: CartItemType) => null;

  const removeFromCart = () => null;

  if(isLoading) return <LinearProgress/>
  if(error) return <div>Something went wrong</div>
  
  return (
    <Wrapper>
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