import { useState, useRef } from 'react';
import { imageUploadFunction } from '../../utils/cloudinaryUpload';

const ProductForm = ({ initialData, onSubmit }) => {
    const [product, setProduct] = useState(initialData);
    const [categoryInput, setCategoryInput] = useState('');
    const [colorInput, setColorInput] = useState('');
    const [imageFiles, setImageFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleImageSelection = (e) => {
        const files = Array.from(e.target.files);
        setImageFiles((prev) => [...prev, ...files]);
    };

    const handleRemoveImage = (indexToRemove) => {
        setImageFiles((prev) => {
            const newFiles = prev.filter((_, index) => index !== indexToRemove);
            if (newFiles.length === 0 && fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            return newFiles;
        });
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const uploadedImageUrls = await imageUploadFunction(imageFiles);
            const finalProduct = {
                ...product,
                images: uploadedImageUrls,
            };

            onSubmit(finalProduct);

            setProduct(initialData);
            setImageFiles([]);
            if (fileInputRef.current) fileInputRef.current.value = '';
        } catch (error) {
            console.error('Error submitting product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product Name:</label>
                <input type="text" name="name" value={product.name} onChange={handleChange} required />
            </div>

            <div>
                <label>Description:</label>
                <textarea name="description" value={product.description} onChange={handleChange} required />
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
                {product.categories.map((cat, i) => (
                    <li key={i}>
                        {cat}
                        <button
                            type="button"
                            onClick={() =>
                                setProduct(prev => ({
                                    ...prev,
                                    categories: prev.categories.filter((_, idx) => idx !== i)
                                }))
                            }
                            style={{ marginLeft: '10px' }}
                        >
                            ×
                        </button>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <label>Colors:</label>
            <select
                value={colorInput}
                onChange={(e) => setColorInput(e.target.value)}
            >
                <option value="">Select a color</option>
                {["Red", "Blue", "Green", "Yellow", "Black", "White", "Purple", "Orange", "Pink", "Gray"].map(color =>
                    <option key={color} value={color}>{color}</option>
                )}
            </select>
            <button type="button" onClick={handleAddColor}>Add</button>
            <ul>
                {product.colors.map((color, i) => (
                    <li key={i}>
                        {color}
                        <button
                            type="button"
                            onClick={() =>
                                setProduct(prev => ({
                                    ...prev,
                                    colors: prev.colors.filter((_, idx) => idx !== i)
                                }))
                            }
                            style={{ marginLeft: '10px' }}
                        >
                            ×
                        </button>
                    </li>
                ))}
            </ul>
        </div>

            <div>
                <label>Images:</label>
                <input type="file" multiple onChange={handleImageSelection} ref={fileInputRef} />
                <ul>
                    {imageFiles.map((file, index) => (
                        <li key={index}>{file.name}
                            <button type="button" onClick={() => handleRemoveImage(index)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <label>Decade:</label>
                <select name="decade" value={product.decade} onChange={handleChange}>
                    <option value="">Select a decade</option>
                    {["60", "70", "80", "90", "0", "10", "20"].map(d => <option key={d} value={d}>{d}</option>)}
                </select>
            </div>

            <div>
                <label>Brand:</label>
                <input type="text" name="brand" value={product.brand} onChange={handleChange} required />
            </div>

            <div>
                <label>Price:</label>
                <input type="number" name="price" value={product.price} onChange={handleChange} required />
            </div>

            <div>
                <label>Size:</label>
                <select name="size" value={product.size} onChange={handleChange}>
                    <option value="">Select a size</option>
                    {["XXS", "XS", "S", "M", "L", "XL", "XXL", ...Array(39).fill().map((_, i) => 32 + i)].map(size =>
                        <option key={size} value={size}>{size}</option>
                    )}
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

            <button type="submit">Submit</button>
        </form>
    );
};

export default ProductForm;
