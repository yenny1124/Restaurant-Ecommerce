import React from 'react'
import './product[id].css';

const Product = () => {
    // const [size, setSize] = useState(0);
    const sushi = {
        id: 1,
        img: "../caliroll.png",
        name: "California Roll",
        price: [8.75],
        desc: "Avacado, Crabmeat, Cucumber",
    };
    return (
        <div className='product-container'>
            <div className='left'>
                <div className='product-img-container'>
                    <img className='product-img' src={sushi.img} objectFit="contain" layout="fill" alt="" />
                </div>
            </div>
            <div className='right'>
                <h1 className='sushi-title'>{sushi.name}</h1>
                <span className='price'>${sushi.price}</span>
                <p className='desc'>{sushi.desc}</p>
                <h3 className='choose'>Choose additional ingredients</h3>
                <div className='ingredients'>
                    <div className='ingredients-option'>
                        <input
                            type="checkbox"
                            id="no"
                            name="no"
                            className='ingredients-option-checkbox'
                        />
                        <label htmlFor="avocado">No Avocado</label>
                    </div>
                    <div className='ingredients-option'>
                        <input
                            type="checkbox"
                            id="no"
                            name="no"
                            className='ingredients-option-checkbox'
                        />
                        <label htmlFor="crabmeat">No Crabmeat</label>
                    </div>
                    <div className='ingredients-option'>
                        <input
                            type="checkbox"
                            id="no"
                            name="no"
                            className='ingredients-option-checkbox'
                        />
                        <label className='label' htmlFor="cucumber">No Cucumber</label>
                    </div>
                </div>
                <div className='add-to-cart'>
                    <input type="number" defaultValue={1} className='quantity' />
                    <button className='add-button'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product