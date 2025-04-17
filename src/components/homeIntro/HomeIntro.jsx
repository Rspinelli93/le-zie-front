import '../../index.css'
import './homeIntro.css'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

import { slideInRight, slideInLeft, fadeInUp, swipeInBottom, zoomIn, staggerContainer } from "../../utils/motionEffects.js";
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
                viewport={{ once: true }}
                >
                VINTAGE FINDS
            </motion.h1>
            <motion.h1
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                >
                MODERN VIBES
            </motion.h1>
            <motion.div 
                className="intro-nav"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                >
                <p>Geneva’s Hidden Gems –<br/>
                Stylish, Sustainable, and Pre-Loved</p>
                <p onClick={() => navigate("/collection")}>OUR SHOWROOM <FaArrowAltCircleRight /></p>
            </motion.div>
        </div>
        <motion.div 
            className="home-motto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            <motion.h2
                variants={swipeInBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >WE BELIEVE IN SECOND CHANCES</motion.h2>
            <ul>
                <motion.li
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <img src={Handpicked} alt="handpicked_logo" />
                    <p>Every piece handpicked with love</p>
                </motion.li>
                <motion.li
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <img src={Sustainable} alt="sustainability_logo" />
                    <p>Sustainable choices, naturally made</p>
                </motion.li>
                <motion.li
                    variants={zoomIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <img src={Ecology} alt="ecology_logo" />
                    <p>Worn before, loved again</p>
                </motion.li>
            </ul>
        </motion.div>
        </>
    )
}

export default HomeIntro