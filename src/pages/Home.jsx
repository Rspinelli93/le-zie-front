import './styles/home.css'
import '../index.css'
import { useNavigate } from 'react-router-dom';

import ProductSuggestion from "../components/productSuggestion/ProductSuggestion.jsx"
import Footer from "../components/footer/Footer.jsx"
import Logo from "../assets/icons/logo_lezie.png"
import Ecology from "../assets/icons/ecology.png"
import Handpicked from "../assets/icons/love.png"
import Sustainable from "../assets/icons/sustainable.png"
import PinkBackground from '../components/backgroundPink/BackgroundPink.jsx';

const Home = () => {
    const navigate = useNavigate();
    return (
    <>
        <div className="home-intro">
            <img src={Logo} alt="logo_lezie" />
            <h1>VINTAGE FINDS MODERN VIBES</h1>
            <div>
                <p>Shop Sustainable, Shop Stylish –
                Pre-Loved Treasures Await</p>
                <button onClick={() => navigate("/collection")}>EXPLORE HERE</button>
            </div>
        </div>
        <div className="home-moto">
            <h2>WE BELIVE IN SECOND CHANCES</h2>
            <ul>
                <li>
                    <p>Every piece handpicked with love</p>
                    <img src={Handpicked} alt="handpicked_logo" />
                </li>
                <li>
                    <p>Sustainable choices, naturally made</p>
                    <img src={Sustainable} alt="sustainability_logo" />
                </li>
                <li>
                    <p>Worn before, loved again</p>
                    <img src={Ecology} alt="ecology_logo" />
                </li>
            </ul>
        </div>
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

