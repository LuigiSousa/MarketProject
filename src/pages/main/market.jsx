import { useEffect, useState } from 'react'
import './css/market.css'

function Market() {

    const [items, setItems ] = useState([])

    useEffect(() => {
        async function Items() {
            const response = await fetch('http://localhost:2200/apiInfo')
            const data = await response.json()
            setItems(data)
        }

        Items()
    })

    function handleClick(item) {
        const cart = JSON.parse(localStorage.getItem('cart')) || []  
        cart.push(item)

        localStorage.setItem('cart', JSON.stringify(cart))
    }
    
    return (
        <div>
            <h1>Market</h1>

            <div className="market-container">
                {items && Object.keys(items).map((item) => (
                    <div className="market-item" key={item}>
                        <h3>{items[item].name}</h3>
                        <img src={items[item].image} alt={items[item].name} className="market-image" />
                        <p className='market-p'>{items[item].description}</p>
                        <button className='market-button' onClick={() => handleClick(items[item])}>Add</button>
                    </div>
                ))}            
            </div>
        </div>
    )
}

export default Market