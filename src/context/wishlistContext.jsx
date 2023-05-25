import {createContext, useContext} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

const wishlistContext = createContext({})

export const useWishlist = () => {
  return useContext(wishlistContext)
}

export const WishlistContextProvider = ({children}) => {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", [])

  const addToWishlist = (id) => {
    setWishlist((prevState) => [...prevState, id])
  }

  const removeFromWishlist = (id) => {
    setWishlist((prevState) => prevState.filter(i => i !== id))
  }

  const getWishlistItem = (id) => {
    return wishlist.find((i) => i === id)
  }

  return <wishlistContext.Provider value={{
    getWishlistItem,
    addToWishlist,
    removeFromWishlist,
    wishlist,
  }}>
    {children}
  </wishlistContext.Provider>
}