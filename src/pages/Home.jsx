import { useEffect, useState } from "react";
import GetProducts from "../service/GetProducts";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        GetProducts()
            .then((data) => setProducts(data))
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

