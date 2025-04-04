import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div>
                <h6 className="footer-title">Social Media</h6>
                <ul className="footer-list">
                    <li>Instagram</li>
                    <li>Facebook</li>
                </ul>
                </div>

                <div>
                <h6 className="footer-title">Contact Info</h6>
                <ul className="footer-list">
                    <li>21 Routes des jeunes</li>
                    <li>Carouge 1227 | Switzerland</li>
                    <li>info@le-zie.ch</li>
                    <li>+41 78 123 456</li>
                </ul>
                </div>

                <div>
                <h6 className="footer-title">Legal Stuff</h6>
                <ul className="footer-list">
                    <li>Legal Notices</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>

                <div>
                <h5 className="footer-title">Want to know where we’ll be next?</h5>
                <div className="newsletter">
                    <input type="email" placeholder="Subscribe to our Newsletter" className="newsletter-input" />
                    <button className="newsletter-button">➡️</button>
                </div>
                </div>
            </div>

            <div className="footer-bottom">
                © 2025 Le Zie   |   All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer