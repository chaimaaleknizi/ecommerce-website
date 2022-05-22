import './App.css';
import Header from './common/header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from './pages/Pages';
import Data from './components/Data';
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Sdata from './components/shop/Sdata';
import Footer from './common/footer/Footer';

function App() {
  //stpe 1 fetch data from database
  const {productItems} = Data
  const {shopItems} = Sdata

  const [CartItem, setCardItem] = useState([])

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCardItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCardItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {
     const productExit = CartItem.find((item) => item.id === product.id )
     if(productExit.qty === 1){
        setCardItem(CartItem.filter((item) => item.id !== product.id ))
     }else{
      setCardItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
     }
  }
  return ( 
    <>
    
    <BrowserRouter>
    <Header CartItem={CartItem}/>
     <Routes>
      <Route path="/" element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />}>
      </Route>

     
      <Route path="/cart" element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>}>
      </Route>
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
