const apiUrl = import.meta.env.VITE_API_URL;

const editProduct = async (id, updatedData) => {
    try {
    const response = await fetch(`${apiUrl}/admin/edit/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem('adminToken'))?.token}`
        },
        body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
    } catch (error) {
    console.error("Error editing product:", error);
    return Promise.reject(error);
    }
};

export default editProduct;
