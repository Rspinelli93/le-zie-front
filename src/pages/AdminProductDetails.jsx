import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GetById from "../service/user/GetById.jsx";
import SoldProduct from '../service/admin/SoldProduct.jsx';
import EditProduct from '../service/admin/EditProduct.jsx'

const AdminProductDetails = () => {
    const { id } = useParams(); // Extract product ID from the URL
    const [product, setProduct] = useState(null); // State to store product data
    const [error, setError] = useState(null); // State to store any error
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        // Fetch the product by ID when the component mounts
        GetById(id)
            .then((data) => {
                setProduct(data); // Set the product data
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch((err) => {
                setError(err.message); // Handle error
                setLoading(false); // Set loading to false even on error
            });
    }, [id]); // Only re-run the effect when the 'id' changes

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Edit Product</h1>
            {product && (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    {/* Add other product fields you want to edit */}
                    {/* You can add form inputs here to edit the product */}
                </div>
            )}
        </div>
    );
};

export default AdminProductDetails;
