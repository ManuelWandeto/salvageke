import { Form } from "react-bootstrap";

const EngineFilterForm = ({ options }) => {
  return (
    <Form className="block">
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
    </Form>
  );
};

export default EngineFilterForm;
