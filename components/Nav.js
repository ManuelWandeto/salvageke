import { FaHome } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaGavel } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";
import { GoGear } from "react-icons/go";
import { HiInformationCircle } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import styles from "../styles/nav.module.css";
// import { Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <ul
      className={`navbar-nav ${styles.nav} justify-content-around`}
    >
      <li>
        <a href="#" className={`${styles.nav_link} active`}>
          <span className={`${styles.icon} d-md-none`}>
            <FaHome />
          </span>
          <span className="label">Home</span>
        </a>
      </li>
      <li>
        <a href="#" className={styles.nav_link}>
          <span className={`${styles.icon} d-md-none`}>
            <FaCar />
          </span>
          <span className="label">Sell Your Car</span>
        </a>
      </li>
      <li>
        <a href="#" className={styles.nav_link}>
          <span className={`${styles.icon} d-md-none`}>
            <FaGavel />
          </span>
          <span className="label">Auction</span>
        </a>
      </li>
      <li>
        <a href="#" className={styles.nav_link}>
          <span className={`${styles.icon} d-md-none`}>
            <GiSpanner />
          </span>
          <span className="label">Car Parts</span>
        </a>
      </li>
      <li>
        <a href="#" className={styles.nav_link}>
          <span className={`${styles.icon} d-md-none`}>
            <GoGear />
          </span>
          <span className="label">Engines</span>
        </a>
      </li>
      <li>
        <a href="#" className={styles.nav_link}>
          <span className={`${styles.icon} d-md-none`}>
            <HiInformationCircle />
          </span>
          <span className="label">Information</span>
        </a>
      </li>
      <li>
        <a href="#" className={styles.nav_link}>
          <span className={`${styles.icon} d-md-none`}>
            <FaPhone />
          </span>
          <span className="label">Contact Us</span>
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
