import "./Footer.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-elements">
        <div className="icon-container">
          <h5>Created by Israel Romero</h5>
          <a href="https://github.com/snakedreamz">
            <FaGithubSquare className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/israel-romero-917a54219/">
            <FaLinkedinIn className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
