import { useEffect, useState } from "react"
import Product from "../components/Product"

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(resp => resp.json())
            .then(productsFromServer => setProducts(productsFromServer))
    }, [])

    console.log(products)

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

export default Products