import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-center">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mx-4 hover:text-gray-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mx-4 hover:text-gray-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mx-4 hover:text-gray-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mx-4 hover:text-gray-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl mx-4 hover:text-gray-400 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faPinterest} />
        </a>
      </div>
      <div className="w-full text-sm md:w-auto text-center md:text-center mt-4">
      <p>&copy; 2023 My Company. All rights reserved.</p>
    </div>
    </footer>
  );
}

export default Footer;
