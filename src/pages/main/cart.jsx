import { useState } from 'react'
import './css/cart.css'

function Cart() {

    const [refresh, setRefresh] = useState(false)

    const cart = JSON.parse(localStorage.getItem('cart')) || []

    let priceTotal = 0

    cart.forEach((item) => {
        priceTotal += item.price
    })

    function handleDelete() {
        localStorage.clear()
        console.log("cleared")

        setRefresh(!refresh)
    }

    return (
        <div>

            {refresh ? "" : ""}

            <h1>Cart</h1>

            <div className="cart-total">
                <p>total price: {priceTotal}</p>
            </div>

            {cart && cart.map((item) => (
                <div key={Math.random()} className="cart-item">
                    <h4>item: {item.name}</h4>
                    <a>price: {item.price}</a>
                </div>
            ))}

            <button className="cart-delete" onClick={() => handleDelete()}>clear</button>
        </div>
    )
}

export default Cart