import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ProductDetails() {
  const params = useParams()

  const [product, setProduct] = useState(null)

  const [basketItem, setBasketItem] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/products/${params.id}`)
      .then(resp => resp.json())
      .then(productFromServer => setProduct(productFromServer))
  }, [])

  if (product === null) return <main>Loading...</main>

  if (product.title === undefined) return <main>Picture not found</main>

  return (
      <section className="product-detail main-wrapper">
        <img
          src={product.image}
          alt={product.title}
        />
        <div className="product-detail__side" style = {{borderColor: "yellow"}}>
          <h3></h3>
          <h2>{product.title}</h2>
          <p>
            {product.description}
          </p>
          <p>£{product.price}</p>
          {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
          <Link to='/basket'>
            <button>Add to basket</button>
          </Link>
        </div>
      </section>
  )
}

export default ProductDetails
