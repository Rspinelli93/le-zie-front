import '../../index.css'
import './homeIntro.css'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

import { slideInRight, slideInLeft, fadeInUp, swipeInBottom, zoomIn } from "../../utils/motionEffects.js";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Logo from "../../assets/icons/logo_lezie.png"
import Ecology from "../../assets/icons/ecology.png"
import Handpicked from "../../assets/icons/love.png"
import Sustainable from "../../assets/icons/sustainable.png"

const HomeIntro = () => {
    const navigate = useNavigate();

    return (
        <>
        <div className="home-intro">
            <img src={Logo} alt="logo_lezie" />
            <motion.h1
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                >
                VINTAGE FINDS
            </motion.h1>
            <motion.h1
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                >
                MODERN VIBES
            </motion.h1>
            <motion.div 
                className="intro-nav"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                >
                <p>Shop Sustainable, Shop Stylish –<br/>
                Pre-Loved Treasures Await</p>
                <p onClick={() => navigate("/collection")}>OUR SHOWROOM <FaArrowAltCircleRight /></p>
            </motion.div>
        </div>
        <div className="home-motto">
            <motion.h2
                variants={swipeInBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >WE BELIVE IN SECOND CHANCES</motion.h2>
            <ul>
                <motion.li
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    <img src={Handpicked} alt="handpicked_logo" />
                    <p>Every piece handpicked with love</p>
                </motion.li>
                <motion.li
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    <img src={Sustainable} alt="sustainability_logo" />
                    <p>Sustainable choices, naturally made</p>
                </motion.li>
                <motion.li
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    <img src={Ecology} alt="ecology_logo" />
                    <p>Worn before, loved again</p>
                </motion.li>
            </ul>
        </div>
        </>
    )
}

export default HomeIntro