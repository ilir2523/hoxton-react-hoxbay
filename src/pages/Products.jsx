import Product from "../components/Product"

function Products({products}) {


    // console.log(products)

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