import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:zainnaseer510@gmail.com" data-cursor="disable">
                zainnaseer510@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p className="contact-phone-row">
              <a href="tel:+923010744002" data-cursor="disable">
                +92 301-0744002
              </a>
              <a
                href="https://wa.me/923010744002?text=Hello%20Zain%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="contact-whatsapp"
                data-cursor="disable"
              >
                <FaWhatsapp />
              </a>
            </p>
            <h4>Location</h4>
            <p>Faisalabad, Pakistan</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.instagram.com/zainnaseer515?igsi=MTY4NTQybmF4OHFsNg=="
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/zain.jutt.514591?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <FaFacebookF />
            </a>
            <a
              href="https://github.com/zainnaseer207"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/zainnaseer207/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BOz1V%2BSo4RWOcTubOwVNo6w%3D%3D"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Zain Naseer</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
