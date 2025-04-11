import "../index.css"
import { useParams } from 'react-router-dom';

import Header from '../components/header/Header.jsx';
import Details from '../components/details/Details.jsx'
import ProductSuggestion from '../components/productSuggestion/ProductSuggestion.jsx';
import Footer from '../components/footer/Footer.jsx';

const ProductDetails = () => {
    const { id } = useParams();
    return (
        <>
            <Header />
            <Details id={id} />
            <ProductSuggestion
            title="WHAT ELSE..."
            filterProp={(data) => [...data].sort(() => Math.random() - 0.5).slice(0, 3)}
            />
            <Footer />
        </>
    );
};

export default ProductDetails;
