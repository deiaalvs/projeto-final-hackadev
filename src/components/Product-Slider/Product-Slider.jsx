import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../../styles/product-slider.css';
import '../../styles/product-list.css';

const ProductSlider = () => {
    const [products, setProductSlider] = useState([])
    useEffect(() => {
        fetch('https://api-ecommerce-hackadev.herokuapp.com/product_all')
        .then((res) => res.json())
        .then(setProductSlider)
    },[])
    return (
        <div className='product-slider'>
            <h4>Aproveite essas ofertas também!</h4>
            <div className='slider'>
                {products.map((product) => {
                    const {id_product, product_percent, product_name, product_price} = product
                    return (
                        <div className="product-item">
                            <div className="overlay">
                                <Link to={`/product/${id_product}`} className="product-thumb">
                                    <img
                                        src={`/images/product${id_product}.png`}
                                        alt="Imagem do produto"
                                    />
                                </Link>
                                <span
                                    className="discount"
                                    style={!product_percent ? { display: 'none' } : undefined}
                                >{`-${product_percent}%`}</span>
                            </div>
                            <div className="product-info">
                                <a href="/">{product_name}</a>
                                <h4>
                                    {' '}
                                    {product_price.toLocaleString('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL',
                                    })}
                                </h4>
                            </div>
                            <ul className="icons">
                                <li>
                                    <Link to={`/product/${id_product}`}>
                                        <i className="bx bx-search"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )})}
            </div>
        </div>

    )
}

export default ProductSlider;