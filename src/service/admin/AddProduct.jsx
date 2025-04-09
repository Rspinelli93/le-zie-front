const apiUrl = 'http://localhost:3210';

const AddProduct = async (productData) => {
    try {
    const response = await fetch(`${apiUrl}/admin/create`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify(productData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
    } catch (error) {
    console.error("Error creating product:", error);
    return Promise.reject(error);
    }
};

export default AddProduct;
