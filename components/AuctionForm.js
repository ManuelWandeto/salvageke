import { Form, InputGroup } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import styles from "../styles/auctionform.module.css";

const AuctionForm = () => {
  return (
    <Form>
      <Form.Group
        controlId="vehicle registration input"
        className={`mb-3 d-block mx-auto ${styles.form_group}`}
      >
        <InputGroup>
          <InputGroup.Text
            className="fi fi-ke"
            id="Kenyan-flag-addon"
          ></InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Vehile Registration No"
            maxLength={7}
            required
          ></Form.Control>
        </InputGroup>
      </Form.Group>
      <Form.Group
        className={`mb-3 d-block mx-auto ${styles.form_group}`}
      >
        <InputGroup>
          <InputGroup.Text className={styles.input_addon}>
            <MdLocationOn
              color="white"
              className={styles.addon}
            />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Postal Code"
            required
          ></Form.Control>
        </InputGroup>
      </Form.Group>
      <Form.Group
        className={`mb-3 d-block mx-auto ${styles.form_group}`}
      >
        <InputGroup>
          <InputGroup.Text className={styles.input_addon}>
            <MdEmail
              color="white"
              className={styles.addon}
            />
          </InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Email Address"
            required
          ></Form.Control>
        </InputGroup>
      </Form.Group>
      <Form.Group
        className={`mb-3 d-block mx-auto ${styles.form_group}`}
      >
        <InputGroup>
          <InputGroup.Text className={styles.input_addon}>
            <MdPhone
              color="white"
              className={styles.addon}
            />
          </InputGroup.Text>
          <Form.Control
            type="tel"
            placeholder="Phone number"
            maxLength={10}
            required
          ></Form.Control>
        </InputGroup>
      </Form.Group>
      <button className="btn btn-warning btn-lg d-block mx-auto">
        Get Price
        <FaChevronRight className="ms-1" />
      </button>
    </Form>
  );
};

export default AuctionForm;
