const apiUrl = import.meta.env.VITE_API_URL;

const deleteProduct = async (id) => {
    try {
    const response = await fetch(`${apiUrl}/admin/delete/${id}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('adminToken'))?.token}`
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
    } catch (error) {
    console.error("Error deleting product:", error);
    return Promise.reject(error);
    }
};

export default deleteProduct;
