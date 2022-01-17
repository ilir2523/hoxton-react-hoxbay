import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Product from "../components/Product"

function CategoriesFiltered() {
    const params = useParams()

    const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/products?categoryId=${params.id}`)
      .then(resp => resp.json())
      .then(productsFromServer => setProducts(productsFromServer))
  }, [])

    return (
        <section className="products-container main-wrapper">
            <ul className="products-container__list">
                {products.map(product =>
                        <Product product={product} key={product.id} />
                    )}
            </ul>
        </section>
    )
}

export default CategoriesFiltered