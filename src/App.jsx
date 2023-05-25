import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom"
import styles from "./App.module.scss"
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Vario from "./pages/Vario/Vario";
import Shop from "./pages/Shop/Shop";
import WishList from "./pages/WishList/WishList";
import Product from "./pages/Product/Product";
import {ShoppingCartProvider} from "./context/shoppingCartContext";
import {ApiProvider} from "@reduxjs/toolkit/query/react"
import {apiSlice} from "./store/api/api.slice";
import {WishlistContextProvider} from "./context/wishlistContext";
import Order from "./pages/Order/Order";

function App() {
  return (
    <ApiProvider api={apiSlice}>
      <WishlistContextProvider>
        <ShoppingCartProvider>
          <div className={styles.main}>
            <Router>
              <Routes>
                <Route index element={<Home/>}/>
                <Route path="/vario" element={<Vario/>}/>
                <Route path="/product/:product_id/:id" element={<Product/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/shop/shoes" element={<Shop/>}/>
                <Route path="/shop/clothes" element={<Shop/>}/>
                <Route path="/wishlist" element={<WishList/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/404" element={<NotFound/>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
              </Routes>
            </Router>
          </div>
        </ShoppingCartProvider>
      </WishlistContextProvider>
    </ApiProvider>
  );
}

export default App;
