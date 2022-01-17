import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react"
import Header from "./components/Header";
import Basket from "./pages/Basket";
import Categories from "./pages/Categories";
import CategoriesFiltered from "./pages/CategoriesFiltered";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(resp => resp.json())
      .then(productsFromServer => setProducts(productsFromServer))
  }, [])


  const [basketItems, setBasketItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/baskets')
      .then(resp => resp.json())
      .then(basketsFromServer => setBasketItems(basketsFromServer))
  }, [])

  console.log(basketItems)

  function postOnServerBasket(item) {
    fetch('http://localhost:3000/baskets', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        categoryId: item.categoryId,
        image: item.image,
        quantity: 1,
        userId: 1
      })
    }).then(resp => resp.json())
      .then((newItem) => {
        const copyBasketItems = JSON.parse(JSON.stringify(basketItems))
        copyBasketItems.push(newItem)
        setBasketItems(copyBasketItems)
      })
  }

  function filterProducts(searchValue) {
    let productsList = JSON.parse(JSON.stringify(products))
    if (searchValue !== '') {
      const productsListFilter = productsList.filter(product =>
        product.title.toLowerCase().includes(searchValue)
      )
      setProducts(productsListFilter)
    } else {fetch('http://localhost:3000/products')
    .then(resp => resp.json())
    .then(productsFromServer => setProducts(productsFromServer))}
  }

  return (
    <>
      <Header filterProducts={filterProducts} />
      <main>
        <Routes>
          <Route index element={<Navigate to='/products' />} />
          <Route path='/products' element={<Products products={products} />} />
          <Route path='/products/:id' element={<ProductDetails postOnServerBasket={postOnServerBasket} />} />

          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:id' element={<CategoriesFiltered />} />
          <Route path='/basket' element={<Basket basketItems={basketItems} setBasketItems={setBasketItems} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
