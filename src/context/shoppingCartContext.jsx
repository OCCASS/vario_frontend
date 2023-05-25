import {createContext, useContext, useState} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";


const shoppingCartContext = createContext({})

export const useShoppingCart = () => {
  return useContext(shoppingCartContext)
}

export const ShoppingCartProvider = ({children}) => {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", [])
  const [showCart, setShowCart] = useState(false)

  const openCart = () => setShowCart(true)
  const closeCart = () => setShowCart(false)

  const increaseItemQuantity = (id, size) => {
    setCartItems((prevState) => prevState.map(item => {
      if (item.id === id && item.size === size) {
        return {...item, quantity: item.quantity + 1}
      } else {
        return item
      }
    }))
  }

  const decreaseItemQuantity = (id, size) => {
    setCartItems((prevState) => prevState.map(item => {
      if (item.id === id && item.size === size) {
        return {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1}
      } else {
        return item
      }
    }))
  }

  const removeItem = (id, size) => {
    setCartItems((prevState) => prevState.filter(item => item.id !== id || item.size !== size))
  }

  const addToCart = (item) => {
    const found = cartItems.find(i => i.id === item.id && i.size === item.size)

    if (found !== undefined) {
      increaseItemQuantity(item.id)
    } else {
      setCartItems((prevState) => [...prevState, item])
    }
  }

  const getItemQuantity = (id, size) => {
    const item = cartItems.find(item => item.id === id && item.size === size)
    if (item === undefined) return 0
    else return item.quantity
  }

  const setItemPrice = (id, size, price) => {
    setCartItems((prevState) => prevState.map(item => {
        if (item.id === id && item.size === size) {
          return {...item, price}
        } else {
          return item
        }
      })
    )
  }

  return <shoppingCartContext.Provider
    value={{
      cartItems,
      increaseItemQuantity,
      decreaseItemQuantity,
      removeItem,
      addToCart,
      getItemQuantity,
      showCart,
      setShowCart,
      openCart,
      closeCart,
      setItemPrice
    }}>
    {children}
  </shoppingCartContext.Provider>
}