# IMPORTS:
npm i @material-ui/core @material-ui/icons \
npm i react-query \
npm i styled-components @types/styled-components 


# INDEX FOR REACT-QUERY:
import {QueryClient,QueryClientProvider} from 'react-query'; \
const client = new QueryClient(); \
ReactDOM.render( \
<React.StrictMode> \
<QueryClientProvider client={client}><App /></QueryClientProvider> \
</React.StrictMode>, \
document.getElementById('root') \
); 


# USE OF REACT QUERY IN COMPONENT:
import { useQuery } from "react-query"; \
const { data, isLoading, error } = useQuery<CartItemType[]>("products",getProducts);  \
console.log(data); 


# LINEAR PROGRESS BAR WHILE LOADING:
import LinearProgress from "@material-ui/core/LinearProgress"; \
if (isLoading) return <LinearProgress />; 


# FETCHING DATA FROM API:
export type CartItemType = { \
id: number; \
category: string; \
description: string; \
image: string; \
price: number; \
title: string; \
amount: number; \
}; 

const getProducts = async (): Promise<CartItemType[]> =>  \
await (await fetch("https://fakestoreapi.com/products")).json(); \


# USE DRAWER AS RIGHT SIDEBAR:
import Drawer from "@material-ui/core/Drawer"; \
<Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}> \
<Cart \
          cartItems={cartItems} \
          addToCart={handleAddToCart} \
          removeFromCart={handleRemoveFromCart} \
        /> \
</Drawer> 


# MAKE A SHOPPING ICON WITH BADGE HOLDING COUNT:
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"; \
import Badge from "@material-ui/core/Badge"; \
<Badge badgeContent={getTotalItems(cartItems)} color="error"> \
<AddShoppingCartIcon /> \
</Badge>


# MAKE A GRID AND SET ITEM VALUE:
import Grid from "@material-ui/core/Grid"; \
<Grid container spacing={3}> \
{data?.map((item: CartItemType) => ( \
<Grid item key={item.id} xs={12} sm={4}> \
<Item item={item} handleAddToCart={handleAddToCart} /> \
</Grid> \
))} \
</Grid>


# USE STYLED COMPONENTS IN STYLES.TS FILE:
import styled from 'styled-components' 

export const Wrapper=styled.div` \
font-family:Arial,Helvetica,sans-serif; \
width:500px; \
padding:20px;  \
`;


# MAKE MATERIAL-UI BUTTONS:
import Button from "@material-ui/core/Button"; \
<Button \
size="small" \
disableElevation \
variant="contained" \
onClick={() => removeFromCart(item.id)} \
> -</Button>


# USE FUNCTION REDUCE TO FIND AND CHANGE VALUES:
const handleRemoveFromCart = (id: number) => { \
setCartItems(prev=>( \
prev.reduce((ack,item)=>{ \
if(item.id===id){ \
if(item.amount===1)return ack; \
return [...ack,{...item,amount:item.amount-1}] \
}else{ \
return [...ack,item]; \
} \
},[] as CartItemType[]) \
)) \
};
