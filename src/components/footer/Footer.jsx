import './footer.css'
import { FaArrowAltCircleRight, FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useScroll } from '../../contexts/ScrollContext';

import Logo from "../../assets/icons/logo_lezie_simple.png"

const Footer = () => {
    const { footerRef } = useScroll();

    const isAdmin = location.pathname.startsWith('/admin')
    return (
        <>
        {isAdmin && (
            <footer className="footer-admin"><img src={Logo} alt="logo_lezie" onClick={() => navigate("/")} /></footer>
        )}
        {!isAdmin && (
                    <footer className="footer" ref={footerRef}>
                    <div className='footer-title'>
                        <h2>REACH OUT FOR INQUIRIES</h2>
                        {/* Missing image, done when class is done in index for backgorunf imahges */}
                    </div>
                    <ul className='footer-list'>
                        <li>
                            <h6>PHONE</h6>
                            <p>+41 12 345 6789</p>
                        </li>
                        <li>
                            <h6>EMAIL</h6>
                            <p>info@lezie.ch</p>
                        </li>
                        <li>
                            <h6>SOCIAL</h6>
                            <div>
                            <FaInstagram />
                            <FaFacebook />
                            </div>
                        </li>
                    </ul>
                    <div className='footer-bottom'>
                        <h2>GET THE LATEST NEWS</h2>
                        <div className='footer-input'>
                            <input type="email" placeholder='Type your email to subscribe to our newsletter'/>
                            <button><FaArrowAltCircleRight /></button>
                        </div>
                    </div>
                </footer>
        )}
        </>
    )
}

export default Footer