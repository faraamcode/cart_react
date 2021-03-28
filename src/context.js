import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()
const initialItems ={
  cart: cartItems,
  total: 0,
  amount : 0,
  loading: false
}


const AppProvider = ({ children }) => {
  
  // const [cart, setCart] = useState(cartItems)
  const [state, dispatch] = useReducer(reducer, initialItems)
const clearItem = ()=>{
  dispatch({type: "CLEAR_ITEMS"})
}
const removeItem = (id)=>{
  dispatch({type: "REMOVE", payload: id})
}
const increaseItem = (id)=>{
  dispatch({type: "INCREASE", payload: id})
  console.log(id);
}
const decreaseItem = (id)=>{
  dispatch({type: "DECREASE", payload: id})
  console.log(id);
}
const getTotal = ()=>{
  dispatch({type: "TOTAL"})
  
}


  return (
    <AppContext.Provider
      value={{
        ...state,
        clearItem,
        removeItem,
        increaseItem,
        decreaseItem,
        getTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
