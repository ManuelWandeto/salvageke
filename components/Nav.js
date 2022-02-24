import { FaHome } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaGavel } from "react-icons/fa";
import { GiSpanner, GiTyre } from "react-icons/gi";
import { GoGear } from "react-icons/go";
import { HiInformationCircle } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import styles from "../styles/nav.module.css";
import Link from "next/link";
import {useRouter} from 'next/router';

const Navigation = ({ selectHandler }) => {
  const NavLink = ({ route, icon, label }) => {
    const Icon = icon;
    const router = useRouter();
    return (
      <Link href={route}>
        <a
          className={`${styles.nav_link} ${router.pathname === route ? styles.activeLink : ""}`}
          onClick={selectHandler}
        >
          <span className={`${styles.icon} d-md-none`}>
            <Icon />
          </span>
          <span className="label">{label}</span>
        </a>
      </Link>
    );
  };
  return (
    <ul
      className={`navbar-nav ${styles.nav} justify-content-around`}
    >
      <li>
        <NavLink route="/" icon={FaHome} label="Home" />
      </li>
      <li>
        <NavLink
          route="#"
          icon={FaCar}
          label="Sell Your Car"
        />
      </li>
      <li>
        <NavLink
          route="/auctions"
          icon={FaGavel}
          label="Auctions"
        />
      </li>
      <li>
        <NavLink
          route="/parts"
          icon={GiSpanner}
          label="Car Parts"
        />
      </li>
      <li>
        <NavLink
          route="/parts/engines"
          icon={GoGear}
          label="Engines"
        />
      </li>
      <li>
        <NavLink
          route="/parts/tyres"
          icon={GiTyre}
          label="Tyres"
        />
      </li>
      <li>
        <NavLink
          route="#"
          icon={HiInformationCircle}
          label="About Us"
        />
      </li>
      <li>
        <NavLink
          route="#"
          icon={FaPhone}
          label="Contact Us"
        />
      </li>
    </ul>
  );
};

export default Navigation;
