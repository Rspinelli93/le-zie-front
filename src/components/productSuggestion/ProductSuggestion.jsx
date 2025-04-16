import "../../index.css"
import "./productSuggestion.css"
import { useEffect, useState } from "react";
import { useProductRedirect } from '../../hooks/useProductRedirect.jsx'

import GetProducts from "../../service/user/GetProducts.jsx";

const ProductSuggestion = ({title, filterProp}) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const redirectToProduct = useProductRedirect();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        GetProducts()
            .then((data) => {
                setIsLoading(false)
                const filteredProducts = filterProp ? filterProp(data) : data;
                setProducts(filteredProducts);
            })
            .catch((err) => setError(err.message));
            setIsLoading(false)
    }, [filterProp]);

    return (
        <>
        <div className="product-suggestion">
            <h2>{title}</h2>
            {error && (
            <div className="error-message">
                <p>Something went wrong: {error}</p>
            </div>)}
            {isLoading ? (
                <div className="loader"></div>
            ) : (
            <div className="product-container">
                {products.map(product => (
                    <div
                        key={product._id}
                        onClick={() => redirectToProduct(product._id)}
                        className="product-box">
                        <img src={product.images[0]} alt={product.name}/>
                        <h6>{product.name}</h6>
                        <p>Details</p>
                    </div>
                ))}
            </div>)}
        </div>
        </>
    )
}

export default ProductSuggestion