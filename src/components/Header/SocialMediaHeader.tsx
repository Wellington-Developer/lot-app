import "./styles.css";
import { FaWhatsapp } from "react-icons/fa";

export default function SocialMediaHeader() {
  return (
    <div className="socialmedia-container">
      <div className="socialmedia-content container">
        <ul>
          <li>
            <a
              target="blank"
              href="https://api.whatsapp.com/send/?phone=4195143839&text&type=phone_number&app_absent=0"
            >
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
