import Image from "next/image";
import logo from "../public/images/companyLogo.png";
import salvageLogo from "../public/vectors/SalvageKenyaLogo.svg";
import towTruck from "../public/vectors/tow_truck.svg";
import { Navbar, Container, Row } from "react-bootstrap";
import Nav from "../components/Nav";
import styles from "../styles/header.module.css";
import { FaPhone } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="header"
      variant="dark"
      expand="md"
      className={`${styles.header} d-block`}
      collapseOnSelect
      fixed="top"
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container className="d-none d-md-block my-3 px-2">
        <Row className="p-0">
          <div className="col-md-6 pe-2">
            <Image
              src={salvageLogo}
              alt="Slavage Kenya Logo"
              width={461}
              height={132}
            />
          </div>
          <div className="col-md-6 ps-2">
            <Image
              src={towTruck}
              alt="Tow truck art"
              width={600}
              height={181}
            />
          </div>
        </Row>
      </Container>
      <Container fluid="md" className="d-md-none">
        <div className={styles.logo}>
          <Image
            src={logo}
            width={488}
            height={289}
            alt="Salvage kenya logo"
            className={styles.logo}
          />
        </div>

        <div className={styles.mobile_buttons}>
          <div className={styles.button}>
            <FaPhone color="white" />
          </div>
          <Navbar.Toggle className={styles.button}>
            {expanded ? (
              <MdClose color="white" />
            ) : (
              <GiHamburgerMenu color="white" />
            )}
          </Navbar.Toggle>
        </div>
      </Container>
      <Navbar.Collapse className={styles.collapse}>
        <Nav></Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
