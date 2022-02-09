import { Row, Collapse } from "react-bootstrap";
import Engine from "../../components/Engine";
import { useEffect, useState } from "react";
import axios from "axios";
import Filters from "../../components/EngineFilterForm";
import { getSelectOptions } from "../../utils";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Engines = () => {
  const [engines, setEngines] = useState(null);
  const [selectOptions, setSelectOptions] = useState(null);
  const [filterToggle, toggleFilter] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/parts")
      .then((response) => {
        let data = response.data.engines;
        setEngines(data);
        setSelectOptions(
          getSelectOptions(data, Object.keys(data[0]))
        );
      })
      .catch((e) => console.log(e.message));
  }, []);

  return engines ? (
    <section className="content container-md">
      <Row className="justify-content-around align-items-center my-4">
        <h1 className="col-6 align-middle m-0">
          Buy Used Vehicle engines
        </h1>
        <strong className="col-4 text-end">
          {engines.length} Engines
        </strong>
      </Row>
      <button
        className="btn btn-warning mb-3"
        onClick={() => toggleFilter((toggle) => !toggle)}
        aria-controls="filters"
        aria-expanded={filterToggle}
      >
        Show filter options
        {filterToggle ? (
          <FaChevronUp className="ms-2" />
        ) : (
          <FaChevronDown className="ms-2" />
        )}
      </button>
      <Collapse in={filterToggle} className="mb-4">
        <div id="filter">
          <h2 style={{ fontSize: 21, fontWeight: 600 }}>
            Filter the list
          </h2>
          {selectOptions && (
            <Filters options={selectOptions} />
          )}
        </div>
      </Collapse>
      <Row className="g-md-2 gy-4 gy-md-4">
        {engines.map((engine) => (
          <Engine key={engine.id} engine={engine} />
        ))}
      </Row>
    </section>
  ) : (
    <div className="content">
      <h1>Engines not loaded yet</h1>
    </div>
  );
};

export default Engines;
