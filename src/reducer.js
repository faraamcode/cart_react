const reducer = (state, action)=>{
    if (action.type === "CLEAR_ITEMS") {
        return {
            ...state, cart: []
        }
    }
    if (action.type === "REMOVE") {
       const removeId = action.payload
       const newCart = state.cart.filter((item)=> item.id !==removeId ) 
       return {
           ...state, cart :newCart
       }
    }

    if (action.type === "INCREASE") {
       const increaseId = action.payload
       const newCart = state.cart.map((item)=> {
           if (item.id === increaseId) {
               return {...item, amount: item.amount+1}
           }
           return item
       } ) 
       return {
           ...state, cart :newCart
       }
    }
    if (action.type === "DECREASE") {
       const decreaseId = action.payload
       const newCart = state.cart.map((item)=> {
           if (item.id === decreaseId) {
 
               return {...item, amount: item.amount - 1}
           }

           return item
       } ) 
      const finalItem = newCart.filter((item)=> item.amount !== 0)

       return {
           ...state, cart :finalItem
       }
    }

    if (action.type == "TOTAL") {
        let {total, amount} = state.cart.reduce((cartTotal, cartItem) =>{
            const {price, amount} = cartItem
            const itemTotal = amount * price
            cartTotal.total += itemTotal
            cartTotal.amount +=amount
            return cartTotal
        }, {
            total: 0,
            amount :0
        })

        return {
            ...state, total, amount
        }
    }
    return state

}

module.exports = reducer