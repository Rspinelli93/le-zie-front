import '../index.css'

import ProductSuggestion from "../components/productSuggestion/ProductSuggestion.jsx"
import Footer from "../components/footer/Footer.jsx"
import HomeIntro from "../components/homeIntro/HomeIntro.jsx"
import PinkBackground from '../components/backgroundPink/BackgroundPink.jsx';

const Home = () => {
    return (
    <>
        <HomeIntro />
        <ProductSuggestion
            title="NEW ARRIVALS"
            filterProp={(data) => data.slice(-3)}
        />
        <PinkBackground />
        <Footer />
    </>

    );
};

export default Home;

