import { Form, Row } from "react-bootstrap";
import {css} from '@emotion/react';
import Styled from '@emotion/styled';
import {GiCancel, GiConfirmed} from 'react-icons/gi';

const Action = Styled('button')`
  padding: .30em .40em;
  font-family: var(--ff-body-text);
  font-weight: 500;
  font-size: var(--fs-secondary);
  border-radius: 5px;
`

const EngineFilterForm = ({ options }) => {
  return (
    <Form className="block"  css={css`
      div > label, div > select {
        font-family: var(--ff-body-text);
        font-size: var(--fs-secondary);
      };
      div > select {
        color: var(--text-light);
      };
    `}>
        <Form.Group controlId="filterByYear" className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Select>
            <option>Any</option>
            {options.year.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group
          controlId="filterByManufacturer"
          className="mb-3"
        >
          <Form.Label>Manufacturer</Form.Label>
          <Form.Select>
            <option>Any</option>
            {options.make.map((make) => (
              <option key={make}>{make}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group
          controlId="filterByModel"
          className="mb-3"
        >
          <Form.Label>Model</Form.Label>
          <Form.Select>
            <option>Any</option>
            {options.model.map((model) => (
              <option key={model}>{model}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group
          controlId="filterByFuelType"
          className="mb-3"
        >
          <Form.Label>Fuel Type</Form.Label>
          <Form.Select>
            <option>Any</option>
            {options.fuelType.map((fuelType) => (
              <option key={fuelType}>{fuelType}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group
          controlId="filterByGearbox"
          className="mb-3"
        >
          <Form.Label>Gearbox</Form.Label>
          <Form.Select>
            <option>Any</option>
            <option>Automatic</option>
            <option>Manual</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          controlId="filterByCapacity"
          className="mb-3"
        >
          <Form.Label>Capacity</Form.Label>
          <Form.Select>
            <option>Any</option>
            <option>0 - 999 cc</option>
            <option>1000 - 2999cc</option>
            <option>3000 - 3999cc</option>
            <option>4000 - 4999cc</option>
            <option>5000 - 5999cc</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="SortBy">
          <Form.Label>Sort By</Form.Label>
          <Form.Select>
            <option>Date added</option>
            <option>Mileage</option>
            <option>Capaciy</option>
          </Form.Select>
        </Form.Group>
        <Row className="mt-3 justify-content-around g-0">
          <Action className="col-3 btn-danger">
            Clear
            <GiCancel className="ms-2"/>
          </Action>
          <Action className="col-3 btn-primary">
            Apply
            <GiConfirmed className="ms-2"/>
          </Action>
        </Row>
    </Form>
  );
};

export default EngineFilterForm;
