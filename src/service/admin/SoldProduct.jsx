const apiUrl = 'http://localhost:3210';

const SoldProduct = async (id) => {
    try {
    const response = await fetch(`${apiUrl}/admin/reserve/${id}`, {
        method: "PUT",
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
    console.error("Error marking it as sold product:", error);
    return Promise.reject(error);
    }
};

export default SoldProduct;
