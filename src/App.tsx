import React, { useState } from 'react';
import './App.css';
import Header from './conponents/common/Header';
import Main from './conponents/common/Main';
import Footer from './conponents/common/Footer';
import { IProduct } from './models/product';
import { ICart } from './models/cart';
import Cart from './conponents/common/Cart';


let productList: IProduct[] = [
  { id: 1, name: "Product 1", description: "Description product 1", price: 200000, quantity: 10, imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/210655/iphone-11-pro-xam-600x600-200x200.jpg' },
  { id: 2, name: "Product 2", description: "Description product 2", price: 200000, quantity: 10, imageUrl: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-mini-blue-select-2020_2.png' },
  { id: 3, name: "Product 3", description: "Description product 3", price: 200000, quantity: 10, imageUrl: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-x-256gb-cu-den-didongviet_1_10.jpg' },
  { id: 4, name: "Product 4", description: "Description product 4", price: 200000, quantity: 10, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/618FTkMHQ3L._AC_SL1500_.jpg' },
  { id: 5, name: "Product 5", description: "Description product 5", price: 200000, quantity: 10, imageUrl: 'https://www.gizmochina.com/wp-content/uploads/2019/08/Samsung-Galaxy-Note-10.jpg' }
];

let carts: ICart[] = [];

const App = () => {

  let [listCart, setListCart] = useState(carts);

  const addToCart = (product: IProduct): void => {
    let arrCart: ICart[] = listCart;
    const index = arrCart.findIndex(cart => cart.id === product.id);
    if (index === -1) arrCart.push({
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      priceItem: product.price,
      quantity: 1,
      totalPrice: product.price
    });
    else {
      arrCart[index].quantity += 1;
      arrCart[index].totalPrice = arrCart[index].quantity * product.price;
    }
    ;

    setListCart(arrCart);
  };

  return (
    <div className="App">
      <div>
        <Cart listCart={listCart}></Cart>
        <Header></Header>
        <Main productList={productList} addToCart={addToCart}></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App;
