import "./Footer.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-elements">
        <div className="icon-container">
          <FaGithubSquare className="icon" />
          <FaLinkedinIn className="icon" />
        </div>
        <h5>Created by Israel Romero</h5>
      </div>
    </footer>
  );
};

export default Footer;
