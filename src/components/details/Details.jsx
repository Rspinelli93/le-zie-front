import "../../index.css"
import "./details.css"
import { useState, useEffect } from 'react';
import GetById from "../../service/user/GetById.jsx";

const Details = ({id}) => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [mainImageIndex, setMainImageIndex] = useState(0);

    useEffect(() => {
        GetById(id)
            .then((data) => {
                setProduct(data);
                setMainImageIndex(0);
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [id]);

    const handleThumbnailClick = (index) => {
        setMainImageIndex(index);
    };

    return (
        <>
        <div>
            {error && (
                <div className="error-message">
                    <p>Can't load this product 😖: {error}</p>
                </div>
            )}
            {product && (
                <div className='product-details'>
                    <div className='details-top'>
                    <div className="product-images-container">
                            <div className="main-image">
                                {product.images && product.images.length > 0 && 
                                    <img 
                                        src={product.images[mainImageIndex]} 
                                        alt={`${product.name} - View ${mainImageIndex + 1}`} 
                                    />
                                }
                            </div>
                            <div className="thumbnails-container">
                                {product.images && product.images.map((image, index) => (
                                    <img 
                                        key={index}
                                        src={image} 
                                        alt={`${product.name} - Thumbnail ${index + 1}`}
                                        className={index === mainImageIndex ? 'active-thumbnail' : ''}
                                        onClick={() => handleThumbnailClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <h2>{product.name}</h2>
                        <hr className='underline'/>
                        <p className='price'>{product.price}</p>
                        <p className='product-description'>{product.description}</p>
                    </div>
                    <div className='details-bottom'>
                        <h2>DETAILS</h2>
                        <hr className='underline'/>
                        <ul>
                            <li>{product.name}</li>
                            <li>Size: {product.size}</li>
                            <li>Price: CHF. {product.price}</li>
                            <li>Brand: {product.brand}</li>
                            <li>Decade: {product.decade}</li>
                            <li>Season: {product.season}</li>
                            <li>Colors: {product.colors.join(' | ')}</li>
                            <li>Categories: {product.categories.join(' | ')}</li>
                        </ul>                           
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default Details