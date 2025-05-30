import "../../index.css"
import './Footer.css'
import { motion } from "framer-motion";
import { useState } from "react";
import { subscribeToNewsletter } from "../../utils/newsletterSubscription.js";

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useScroll } from '../../contexts/ScrollContext';
import { popIn, staggerContainer, fadeInUp } from "../../utils/motionEffects.js";

const Footer = () => {
    const { footerRef } = useScroll();
    const placeholder = 'Subscribe to our Newsletter'
    const [ text, setText ] = useState(placeholder)
    const isAdmin = location.pathname.startsWith('/admin')
    const [ email, setEmail ] = useState('')
    
    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        const success = await subscribeToNewsletter(email);
        if (success) {
            setEmail('');
            setText(placeholder);
        }
    }
    
    return (
        <>
        {!isAdmin && (
            <footer className="footer" ref={footerRef}>
                <div className='footer-title'>
                    <h2>We’re Always on the Move</h2>
                    <h2>Stay in the Loop!</h2>
                </div>
                <div className='footer-newsletter'>
                    <h2>Wanna Know Where We’ll Be Next? </h2>
                    <motion.div
                        variants={popIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        >
                        <input 
                        type="email" 
                        placeholder={text}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setText('')}
                        onBlur={() => !email && setText(placeholder)}
                        />
                        <button onClick={handleNewsletterSubmit}><FaArrowAltCircleRight className="subscribe-button"/></button>
                    </motion.div>
                </div>
                <motion.ul 
                className='footer-list'
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                >
                    <motion.li
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        >
                        <h6>PHONE</h6>
                        <p>+41 12 345 6789</p>
                    </motion.li>
                    <motion.li
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        >
                        <h6>EMAIL</h6>
                        <p href="mailto:info@lezie.ch">info@lezie.ch</p>
                    </motion.li>
                    <motion.li
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        >
                        <h6>SOCIAL</h6>
                        <a 
                        className="social-icons"
                        href="https://www.instagram.com/le_zie_vetements_vintage/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        <FaInstagram />
                        </a>
                    </motion.li>
                    <motion.li
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        >
                        <h6>ADRESS</h6>
                        <p>21 routes des Jeunes | Carouge 1227 | Switzerland</p>
                        <p></p>
                    </motion.li>
                </motion.ul>
            </footer>
        )}
        </>
    )
}

export default Footer