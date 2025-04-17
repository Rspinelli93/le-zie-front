import "../../index.css"
import "./productSuggestion.css"
import { useEffect, useState } from "react";
import { useProductRedirect } from '../../hooks/useProductRedirect.jsx'
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/motionEffects.js";

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
            </div>
            )}
            {isLoading && (
            <div className="loader">
            </div>
            )}
        {products && (
            <div className="product-container">
                {products.map(product => (
                    <motion.div
                            key={product._id}
                            onClick={() => redirectToProduct(product._id)}
                            className={`product-box ${product.sold ? "sold" : ""}`}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            >
                            <img src={product.images[0]} alt={product.name}/>
                            <h6>{product.name}</h6>
                            <p>Details</p>
                    </motion.div>
                ))}
            </div>)}
        </div>
        </>
    )
}

export default ProductSuggestion