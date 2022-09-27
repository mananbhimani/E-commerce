import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {

    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart(state, action) {
            const iteamidex = state.cartItems.findIndex(iteam => iteam.id === action.payload.id);
            if(iteamidex >=0 )
            {
                state.cartItems[iteamidex].cartTotalQuantity += 1;
                
                state.cartTotalAmount += action.payload.price;
            }else{
                // const tempproduct = {...action.payload,cartTotalQuantity:1};
                // state.cartItems.push(tempproduct)

            state.cartItems.push(action.payload);
            toast.success(`${action.payload.title} addded to cart`, { position: "top-left"  });
            state.cartTotalAmount += action.payload.price;
            console.log(state.cartTotalAmount); 
            localStorage.setItem('data', JSON.stringify(state.cartItems))
            }
        },
        removeiteam(state, action) {
            const nextcartIteams = state.cartItems.filter(
                cartItems => cartItems.id !== action.payload.id,
                state.cartTotalAmount -= action.payload.price,
                console.log(state.cartTotalAmount),
            );
            state.cartItems = nextcartIteams;
            localStorage.setItem("data", JSON.stringify(state.cartItems)); 
        },
        
    },
});

export const { addtocart, removeiteam ,total} = cartSlice.actions;

export default cartSlice.reducer;