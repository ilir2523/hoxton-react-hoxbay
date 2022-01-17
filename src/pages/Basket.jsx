import { Link } from 'react-router-dom'

function Basket({ basketItems, setBasketItems }) {

    function handleChange(item, e) {
        let basketItemsQty = JSON.parse(JSON.stringify(basketItems))
        const itemFound = basketItemsQty.find(function (basketItem) {
            return basketItem.id === item.id
        })
        itemFound.quantity = Number(e.target.value)
        console.log(e.target.value)

        if (itemFound.quantity === 0) {
            basketItemsQty = basketItemsQty.filter(function (basketItem) {
                return basketItem.quantity > 0
            })
        }

        setBasketItems(basketItemsQty)
    }

    // console.log(basketItems)

    function calculateTotalPrice() {
        let total = 0
        for (const item of basketItems) {
            total = total + item.price * item.quantity
        }
        return total.toFixed(2)
    }

    function calculateItemPrice(item) {
        let total = 0
        total = total + item.price * item.quantity
        return total.toFixed(2)
    }

    return (
        <section className="basket-container">
            <h2>Your Basket</h2>
            <ul>
                {basketItems.map(basketItem =>
                    <li key={basketItem.id}>
                        <article className="basket-container__item">
                            <Link to={`/products/${basketItem.id}`}>
                                <img
                                    src={basketItem.image}
                                    alt={basketItem.title}
                                    width="90"
                                />
                            </Link>
                            <p>{basketItem.title}</p>
                            <p>
                                Qty:
                                <select value={basketItem.quantity} onChange={(e) => {
                                    handleChange(basketItem, e)
                                }}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </p>
                            {/* <!-- The item total is calculated using the Qty selected value --> */}
                            <p>Item total: £{calculateItemPrice(basketItem)}</p>
                        </article>
                    </li>

                )}


            </ul>
            <h3>Your total: £{calculateTotalPrice()}</h3>
        </section>
    )
}

export default Basket