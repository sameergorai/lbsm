import Link from "next/link";
import './footer.css'

const Footer = () => {
  return (
 

    <footer className="footer-section">
        <div className="container">
            <div className="footer-content">
                
                <div className="footer-col about">
                    <h2>About Us</h2>
                    <p>
                        Established in the year 1971 by a group of motivated teachers and social workers committed to empowering the poor people, especially those belonging to the ST/SC and B.C. categories through education, Lal Bahadur Shastri Memorial College is at present a reputed constituent unit of Kolhan University, Chaibasa, located at Karandih.
                    </p>
                </div>

                <div className="footer-col links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">PRINCIPAL DESK</a></li>
                        <li><a href="#">FACULTIES</a></li>
                        <li><a href="#">GALLERY</a></li>
                        <li><a href="#">CONTACT US</a></li>
                        <li><a href="#">ADMIN LOGIN</a></li>
                    </ul>
                </div>

                <div className="footer-col contact">
                    <h2>Contact Us</h2>
                    
                    <div className="contact-row">
                        <i className="fa-solid fa-headset"></i>
                        <span>+91-9334710089, 7061613757, 0657-2299810</span>
                    </div>

                    <div className="contact-row">
                        <i className="fa-regular fa-envelope"></i>
                        <a href="mailto:lbsmcollege@yahoo.in" className="email-link">lbsmcollege@yahoo.in</a>
                    </div>

                    <div className="contact-row">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Karandih, Jamshedpur Jharkhand India 831002.</span>
                    </div>

                    <h3 className="office-hour-title">Office Hour</h3>
                    <p className="office-time">Monday - Sat : 10:00 am - 05:00 pm</p>
                </div>

            </div>
            
            <a href="#" className="scroll-top">
                <i className="fa-solid fa-arrow-up"></i>
            </a>
        </div>
        
        <div className="copyright-area">
            <div className="container">
                <p>&copy; 2022 LBSM College. All Rights Reserved | Powered by <a href="#">SAMEER</a></p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;