import React from 'react'
import './product[id].css';

const Product = () => {
    // const [size, setSize] = useState(0);
    const sushi = {
        id: 1,
        img: "../caliroll.png",
        name: "California Roll",
        price: [8.75],
        ingredient: "Avacado, Crabmeat, Cucumber",
    };
    return (
        <div>Product[id]</div>
    )
}

export default Product