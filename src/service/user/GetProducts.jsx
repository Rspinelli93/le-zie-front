const apiUrl = 'http://localhost:3210'

const GetProducts = async () => {
    try {
        const response = await fetch(`${apiUrl}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return Promise.reject(error);
    }
};

export default GetProducts;
