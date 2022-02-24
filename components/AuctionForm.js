import { Form, InputGroup } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { css } from '@emotion/react';

const formGroup = css`
  max-width: 375px;
`
const inputAddon = css`
  background-color: #e72727;
  color: #fff;
  border: 1px solid #c42323;
`
const addon = css`
    width: 21px;
    height: 21px;
`

const AuctionForm = () => {
  return (
    <Form css={css`
      font-size: var(--fs-default);
      font-family: var(--ff-body-text);
      color: var(--text-light);
    `}>
      <div className="row">
      <Form.Group
        controlId="vehicle registration input"
        className={`mb-3 d-block mx-auto col-sm-6 col-xl-3`}
        css={formGroup}
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
        css={formGroup}
        className="mb-3 d-block mx-auto col-sm-6 col-xl-3"
      >
        <InputGroup>
          <InputGroup.Text css={inputAddon}>
            <MdLocationOn
              color="white"
              css={addon}
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
        css={formGroup}
        className="mb-3 d-block mx-auto col-sm-6 col-xl-3"
      >
        <InputGroup>
          <InputGroup.Text css={inputAddon}>
            <MdEmail
              color="white"
              css={addon}
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
        css={formGroup}
        className="mb-3 d-block mx-auto col-sm-6 col-xl-3"
      >
        <InputGroup>
          <InputGroup.Text css={inputAddon}>
            <MdPhone
              color="white"
              css={addon}
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
      </div>
      <button className="btn btn-warning btn-lg d-block mx-auto">
        Get Price
        <FaChevronRight className="ms-1" />
      </button>
    </Form>
  );
};

export default AuctionForm;
