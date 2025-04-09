import React, { useState } from 'react';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        categories: [],
        colors: [],
        images: [],
        decade: '',
        brand: '',
        price: '',
        size: '',
        season: '',
    });

    const [categoryInput, setCategoryInput] = useState('');
    const [colorInput, setColorInput] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleAddCategory = () => {
        if (categoryInput && !product.categories.includes(categoryInput)) {
            setProduct({ ...product, categories: [...product.categories, categoryInput] });
            setCategoryInput('');
        }
    };

    const handleAddColor = () => {
        if (colorInput && !product.colors.includes(colorInput)) {
            setProduct({ ...product, colors: [...product.colors, colorInput] });
            setColorInput('');
        }
    };

    const handleAddImage = async () => {
        if (imageFile) {
            // Simulate uploading to Cloudinary and getting a URL
            const imageUrl = URL.createObjectURL(imageFile); // Replace with actual Cloudinary upload logic
            setProduct({ ...product, images: [...product.images, imageUrl] });
            setImageFile(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Product Submitted:', product.name)
        console.log('Product submitted:', product);
    };

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Categories:</label>
                    <input
                        type="text"
                        value={categoryInput}
                        onChange={(e) => setCategoryInput(e.target.value)}
                    />
                    <button type="button" onClick={handleAddCategory}>Add</button>
                    <ul>
                        {product.categories.map((category, index) => (
                            <li key={index}>{category}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <label>Colors:</label>
                    <select value={colorInput} onChange={(e) => setColorInput(e.target.value)}>
                        <option value="">Select a color</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Purple">Purple</option>
                        <option value="Orange">Orange</option>
                        <option value="Pink">Pink</option>
                        <option value="Gray">Gray</option>
                    </select>
                    <button type="button" onClick={handleAddColor}>Add</button>
                    <ul>
                        {product.colors.map((color, index) => (
                            <li key={index}>{color}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <label>Images:</label>
                    <input
                        type="file"
                        onChange={(e) => setImageFile(e.target.files[0])}
                    />
                    <button type="button" onClick={handleAddImage}>Add</button>
                    <ul>
                        {product.images.map((image, index) => (
                            <li key={index}>
                                <img src={image} alt={`Uploaded ${index}`} width="100" />
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <label>Decade:</label>
                    <select name="decade" value={product.decade} onChange={handleChange}>
                        <option value="">Select a decade</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                        <option value="90">90</option>
                        <option value="0">00</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <div>
                    <label>Brand:</label>
                    <input
                        type="text"
                        name="brand"
                        value={product.brand}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Size:</label>
                    <select name="size" value={product.size} onChange={handleChange}>
                        <option value="">Select a size</option>
                        <option value="XXS">XXS</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        {[...Array(39)].map((_, i) => (
                            <option key={i} value={32 + i}>{32 + i}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Season:</label>
                    <select name="season" value={product.season} onChange={handleChange}>
                        <option value="">Select a season</option>
                        <option value="winter/fall">Winter/Fall</option>
                        <option value="summer/spring">Summer/Spring</option>
                    </select>
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;