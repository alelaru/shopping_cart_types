import { LinearProgress } from "@material-ui/core";
import { useQuery } from "react-query";


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

  const handleAddToCart = () => null;

  const removeFromCart = () => null;

  if(isLoading) return <LinearProgress/>
  if(error) return <div>Something went wrong</div>
  
  return (
    <div className="App">
      Start
    </div>
  );
}

export default App;


////https://www.youtube.com/watch?v=sfmL6bGbiN8&ab_channel=freeCodeCamp.org