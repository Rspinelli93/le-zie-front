import "../index.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../components/header/Header.jsx';
import Details from '../components/details/Details.jsx';
import Footer from '../components/footer/Footer.jsx';
import ProductForm from '../components/productForm/ProductForm';

import SoldProduct from '../service/admin/SoldProduct.jsx';
import EditProduct from '../service/admin/EditProduct.jsx';
import DeleteProduct from '../service/admin/DeleteProduct.jsx'
import GetById from '../service/user/GetById.jsx';

const AdminProductDetails = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const [existingImages, setExistingImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const product = await GetById(id);
                setProductData(product);
                setExistingImages(product.images || []);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch product:", error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleProductSubmit = async (updatedData) => {
        try {
            const finalProductData = {
                ...updatedData,
                images: [...existingImages, ...(updatedData.images || [])],
            };

            await EditProduct(id, finalProductData);
            alert('Product updated!');
        } catch (err) {
            console.error("Failed to update product:", err);
        }
    };

    const handleMarkAsSold = async () => {
        try {
            await SoldProduct(id);
            alert("Product marked as sold!");
        } catch (error) {
            console.error("Error marking product as sold:", error);
        }
    };

    const handleDeleteProduct = async () => {
        try {
            const confirmDelete = window.confirm(
                "Are you sure you want to delete the product? This action is irreversible."
            );
            if(confirmDelete) {
                await DeleteProduct(id);
                alert("Product Deleted!");
            }
        } catch (error) {
            console.error("Error eliminating product:", error);
        }
    }

    const handleRemoveExistingImage = (indexToRemove) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to remove this image? This action is irreversible."
        );
        if (confirmDelete) {
            setExistingImages((prev) =>
                prev.filter((_, index) => index !== indexToRemove)
            );
        }
    };

    if (isLoading) return <p>Loading product...</p>;

    return (
        <>
            <Header />
            <Details id={id} />


            <div>
                <h2>EDIT FORM</h2>
                {existingImages.length > 0 && (
                    <div>
                        <h3>Existing Images</h3>
                        <ul>
                            {existingImages.map((url, index) => (
                                <li key={index}>
                                    <img src={url} alt={`product-${index}`}/>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveExistingImage(index)}
                                    >
                                        ×
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <ProductForm
                    initialData={{ ...productData, images: [] }}
                    onSubmit={handleProductSubmit}
                />

                <div>
                    <button onClick={handleMarkAsSold}>
                        Mark as Sold
                    </button>
                </div>

                <div>
                    <button onClick={handleDeleteProduct}>
                        Delete Product
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminProductDetails;
