import "../../index.css"
import "./details.css"
import { useState, useEffect } from 'react';
import GetById from "../../service/user/GetById.jsx";
import useImageZoom from "../../hooks/useImageZoom.jsx"

const Details = ({id}) => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        GetById(id)
            .then((data) => {
                setIsLoading(false)
                setProduct(data);
                setMainImageIndex(0);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [id]);

    const handleThumbnailClick = (index) => {
        setMainImageIndex(index);
    };

    const {
        containerRef,
        imgRef,
        handleMouseMove,
        handleMouseLeave,
    } = useImageZoom(1.5);

    return (
            <>
            <div className="product-detail-background">
            {error && (
                <div className="error-message">
                <p>Can't load this product 😖: {error}</p>
                </div>
            )}
            {isLoading ? (
                <div className="loader"></div>
            ) : (
                product && (
                    <div className='product-details'>
                    <div className='details-top'>
                        <div className="product-images-container">
                        <div
                            className={`main-image ${product.sold ? "sold" : ""}`}
                            ref={containerRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            {product.images && product.images.length > 0 && (
                            <img
                                ref={imgRef}
                                src={product.images[mainImageIndex]}
                                alt={`${product.name} - View ${mainImageIndex + 1}`}
                            />
                            )}
                        </div>
                        <div className="thumbnails-container">
                            {product.images &&
                            product.images.map((image, index) => (
                                <img
                                key={index}
                                src={image}
                                alt={`${product.name} - Thumbnail ${index + 1}`}
                                className={
                                    index === mainImageIndex ? 'active-thumbnail' : ''
                                }
                                onClick={() => handleThumbnailClick(index)}
                                />
                            ))}
                        </div>
                        </div>
                        <div className="details-side">
                        <h2>{product.name}</h2>
                        <hr className="underline" />
                        <p className="product-description">{product.description}</p>
                        <p className="price">CHF {product.price}</p>
                        </div>
                    </div>
                    <div className="details-bottom">
                        <h3>DETAILS</h3>
                        <hr className="underline" />
                        <ul>
                        <li><span>Size:</span> {product.size}</li>
                        <li><span>Price:</span> CHF {product.price}</li>
                        <li><span>Brand:</span> {product.brand}</li>
                        <li><span>Decade:</span> {product.decade}</li>
                        <li><span>Season:</span> {product.season}</li>
                        <li><span>Colors:</span> {product.colors.join(' | ')}</li>
                        <li><span>Categories:</span> {product.categories.join(' | ')}</li>
                        </ul>
                    </div>
                    </div>
                )
            )}
            </div>
            </>
        );
        }

export default Details