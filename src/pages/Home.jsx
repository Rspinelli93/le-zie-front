import { useEffect, useState } from "react";
import GetProducts from "../service/user/GetProducts.jsx";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        GetProducts()
            .then((data) => {
                const newArrivals = data.slice(-3);
                setProducts(newArrivals);
            })
            .catch((err) => setError(err.message));
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            {error ? (
                <p style={{ color: "red" }}>Error: {error}</p>
            ) : (
                <pre>{JSON.stringify(products, null, 2)}</pre>
            )}
        </div>
    );
};

export default Home;

