import "../index.css"
import Header from '../components/header/Header';
import ProductForm from '../components/productForm/ProductForm';
import AddProduct from '../service/admin/AddProduct';

const productTemplate = {
    name: '',
    description: '',
    categories: [],
    colors: [],
    images: [],
    decade: '',
    brand: '',
    price: '',
    size: '',
    season: '',
};

const AddProductPage = () => {
    const handleProductSubmit = async (productData) => {
        await AddProduct(productData);
        alert('Product submitted!');
    };

    return (
        <div>
            <Header />
            <div className="add-product-page">
                <h1>Add Product</h1>
                <ProductForm initialData={productTemplate} onSubmit={handleProductSubmit} />
            </div>
        </div>
    );
};

export default AddProductPage;

