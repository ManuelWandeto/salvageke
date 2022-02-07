import { Row } from "react-bootstrap";
import Engine from "../../components/Engine";
import { useEffect, useState } from "react";
import axios from "axios";

const Engines = () => {
  const [engines, setEngines] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/engines")
      .then((response) => setEngines(response.data))
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
      <Row className="g-md-2 gy-4 gy-md-4">
        {engines.map((engine) => (
          <Engine key={engine.id} engine={engine} />
        ))}
      </Row>
    </section>
  ) : (
    <div>
      <h1>Engines not loaded yet</h1>
    </div>
  );
};

export default Engines;
