import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../styles/product-slider.css';
import '../../styles/product-list.css';

const ProductSlider = ({ category, productId }) => {
    const productsPromoted = []
    const products = useSelector((state) => state.product.products);
    const productListToPromote = [...productsPromoted, products.filter((p) => p.id_product !== productId & p.product_hasdiscount === true & p.product_category === category)];
    const product = productListToPromote[0]
    const productSlider = [...product]

    return (
        <div className='product-slider'>
            <h4>Aproveite essas ofertas também!</h4>
            <div className='slider'>
                {productSlider.map((productItem) => {
                    const {id_product, product_percent, product_name, product_price} = productItem
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