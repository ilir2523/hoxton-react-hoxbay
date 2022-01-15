// import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Product from "../components/Product"

function CategoriesFiltered({products}) {
    const params = useParams()

    return (
        <section className="products-container main-wrapper">
            <ul className="products-container__list">
                {products.filter(product => Number(product.categoryId) === Number(params.id))
                    .map(product =>
                        <Product product={product} key={product.id} />
                    )}
            </ul>
        </section>
    )
}

export default CategoriesFiltered