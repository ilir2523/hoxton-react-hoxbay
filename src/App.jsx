import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Header from "./components/Header";
import Basket from "./pages/Basket";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

function App() {

  const [basketItems, setBasketItems] = useState([])

  // console.log(basketItems)

  function addToBasket(item) {
    const basketItemsList = [...basketItems]
    const itemFound = basketItemsList.find(function (basketItem) {
      return basketItem.id === item.id
    })
    if (itemFound === undefined) {
      const newBasketItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        categoryId: item.categoryId,
        image: item.image,
        quantity: 1
      } 
      basketItemsList.push(newBasketItem)
  }
  setBasketItems(basketItemsList)
}


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to='/products' /> } />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetails addToBasket={addToBasket} /> } />

          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:id' element={<Products />} />
          <Route path='/basket' element={<Basket basketItems={basketItems} setBasketItems={setBasketItems} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
