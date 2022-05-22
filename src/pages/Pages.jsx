import React from 'react'
import Discount from '../components/discount/Discount';
import FlashDeals from '../components/flashDeals/FlashDeals';
import Home from '../components/mainpage/Home'
import NewArrivals from '../components/newarrivals/NewArrivals';
import Shop from '../components/shop/Shop';
import TopCate from '../components/top/TopCate';
import Annu from '../components/annocument/Annu';
import Wrapper from '../components/wrapper/Wrapper';

const pages = ({productItems, CartItem, addToCart, shopItems}) => {
  return (
    <>
    <Home CartItem={CartItem} />
    <FlashDeals productItems={productItems} addToCart={addToCart} />
    <TopCate />
    <NewArrivals />
    <Discount />
    <Shop shopItems={shopItems} addToCart={addToCart}  />
    <Annu />
    <Wrapper />
    </>
  )
}
 
export default pages;