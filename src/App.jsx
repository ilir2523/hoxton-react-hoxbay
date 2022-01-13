import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Basket from "./pages/Basket";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<ProductDetails /> } />

          <Route path='/categories' element={<Categories />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
