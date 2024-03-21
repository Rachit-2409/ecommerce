import React, { createContext, useState } from "react";
import all_product from '../Components/assets/all_product'
export const ShopContext = createContext(null);
const  getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index<all_product.length+1; index++){
        cart[index] = 0;

    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [cartItem, setCartItem] = useState(getDefaultCart());
   
    
    const addToCart = (itemID)=>{
        setCartItem((prev)=>({...prev, [itemID]:prev[itemID]+1}))
        console.log(cartItem)
    }
    const removeCart = (itemID)=>{
        setCartItem((prev)=>({...prev, [itemID]:prev[itemID]-1}))
    }

    const getTotalCartItem = ()=>{
        let totalItem = 0;
        for (const item in cartItem){
            if(cartItem[item] > 0){
                totalItem+=cartItem[item]
            }
        }
        return totalItem;
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                let itemInfo = all_product.find((product)=>product.id ===Number( item))
                totalAmount += itemInfo.new_price * cartItem[item];
            }
           
        }
        return totalAmount;
    }


    const contextValue = {getTotalCartItem,getTotalCartAmount, all_product, cartItem, addToCart, removeCart}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;