import { FaHome } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaGavel } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";
import { GoGear } from "react-icons/go";
import { HiInformationCircle } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import styles from "../styles/nav.module.css";
import Link from "next/link";

const Navigation = ({ selectHandler }) => {
  return (
    <ul
      className={`navbar-nav ${styles.nav} justify-content-around`}
    >
      <li>
        <Link href="/">
          <a
            className={`${styles.nav_link} active`}
            onClick={selectHandler}
          >
            <span className={`${styles.icon} d-md-none`}>
              <FaHome />
            </span>
            <span className="label">Home</span>
          </a>
        </Link>
      </li>
      <li>
        <a
          href="#"
          className={styles.nav_link}
          onClick={selectHandler}
        >
          <span className={`${styles.icon} d-md-none`}>
            <FaCar />
          </span>
          <span className="label">Sell Your Car</span>
        </a>
      </li>
      <li>
        <Link href="/auctions">
          <a
            className={styles.nav_link}
            onClick={selectHandler}
          >
            <span className={`${styles.icon} d-md-none`}>
              <FaGavel />
            </span>
            <span className="label">Auction</span>
          </a>
        </Link>
      </li>
      <li>
        <a
          href="#"
          className={styles.nav_link}
          onClick={selectHandler}
        >
          <span className={`${styles.icon} d-md-none`}>
            <GiSpanner />
          </span>
          <span className="label">Car Parts</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className={styles.nav_link}
          onClick={selectHandler}
        >
          <span className={`${styles.icon} d-md-none`}>
            <GoGear />
          </span>
          <span className="label">Engines</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className={styles.nav_link}
          onClick={selectHandler}
        >
          <span className={`${styles.icon} d-md-none`}>
            <HiInformationCircle />
          </span>
          <span className="label">Information</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className={styles.nav_link}
          onClick={selectHandler}
        >
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
