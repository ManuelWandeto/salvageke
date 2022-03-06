import { Form, FormControl, InputGroup } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { css } from '@emotion/react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

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
  const formik = useFormik({
    initialValues: {
      registration: '',
      postalCode: '',
      email: '',
      phone: ''
    },
    validationSchema: Yup.object({
      registration: Yup.string()
      .max(8, 'must be atleast 8 characters long')
      .matches(/^K[A-Z]{2}\s?[0-9]{3}[A-Z]{1}$/gmi, 'invalid registration number')
      .required('required field!'),
      postalCode: Yup.string()
      .matches(/\d{1}\s?\d{4}/gmi, 'invalid postal code')
      .required('required'),
      email: Yup.string()
      .email('invalid email address')
      .required('required'),
      phone: Yup.string()
      .matches(/^(\+254|0)\d{9}$/g, 'invalid phone number')
      .required('required')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validateOnBlur: true
  });

  return (
    <Form css={css`
      font-size: var(--fs-default);
      font-family: var(--ff-body-text);
      color: var(--text-light);`}
      noValidate
      onSubmit={formik.handleSubmit}
      >
      <div className="row">
      <Form.Group
        className={`mb-3 d-block mx-auto col-sm-6 col-xl-3`}
        css={formGroup}
      >
        <InputGroup hasValidation>
          <InputGroup.Text
            className="fi fi-ke"
            id="Kenyan-flag-addon"
          ></InputGroup.Text>
          <Form.Control
            type="text"
            id="vehicle-registrattion"
            {...formik.getFieldProps('registration')}
            placeholder="Vehile Registration No"
            maxLength={8}
            required
            isValid={!formik.errors.registration && formik.touched.registration}
            isInvalid={formik.touched.registration && formik.errors.registration}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">{formik.errors.registration}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group
        css={formGroup}
        className="mb-3 d-block mx-auto col-sm-6 col-xl-3"
      >
        <InputGroup hasValidation>
          <InputGroup.Text css={inputAddon}>
            <MdLocationOn
              color="white"
              css={addon}
            />
          </InputGroup.Text>
          <Form.Control
            id="postalCode"
            {...formik.getFieldProps('postalCode')}
            type="text"
            placeholder="Postal Code"
            required
            isValid={!formik.errors.postalCode && formik.touched.postalCode}
            isInvalid={formik.touched.postalCode && formik.errors.postalCode}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">{formik.errors.postalCode}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group
        css={formGroup}
        className="mb-3 d-block mx-auto col-sm-6 col-xl-3"
      >
        <InputGroup hasValidation>
          <InputGroup.Text css={inputAddon}>
            <MdEmail
              color="white"
              css={addon}
            />
          </InputGroup.Text>
          <Form.Control
            id="email"
            type="email"
            placeholder="Email Address"
            {...formik.getFieldProps('email')}
            required
            isValid={!formik.errors.email && formik.touched.email}
            isInvalid={formik.touched.email && formik.errors.email}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group
        css={formGroup}
        className="mb-3 d-block mx-auto col-sm-6 col-xl-3"
      >
        <InputGroup hasValidation>
          <InputGroup.Text css={inputAddon}>
            <MdPhone
              color="white"
              css={addon}
            />
          </InputGroup.Text>
          <Form.Control
            id="phone"
            type="tel"
            placeholder="Phone number"
            {...formik.getFieldProps('phone')}
            maxLength={10}
            required
            isValid={!formik.errors.phone && formik.touched.phone}
            isInvalid={formik.touched.phone && formik.errors.phone}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">{formik.errors.phone}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      </div>
      <button type="submit" className="btn btn-warning btn-lg d-block mx-auto">
        Get Price
        <FaChevronRight className="ms-1" />
      </button>
    </Form>
  );
};

export default AuctionForm;
