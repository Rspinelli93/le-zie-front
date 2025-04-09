const apiUrl = 'http://localhost:3210'

const GetbyId = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/products/${id}`, {
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
        console.error("Error fetching product:", error);
        return Promise.reject(error);
    }
};

export default GetbyId;
