//responsible for presenting data as card
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/card.module.css";

const Card = ({ car }) => {
  function formatPrice(x) {
    return x
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="mb-3 col-md-6 col-lg-3">
      <div className="card">
        <div
          title={car.title}
          className={`card-img-top ${styles.image}`}
          style={{
            backgroundImage: `url(${car.images[0]})`,
          }}
        ></div>
        <hr />
        <div className="card-body">
          <h2 className="card-title fs-4">{car.title}</h2>
          <div className="row justify-content-between">
            <strong className="col-4">
              {`KSH ${formatPrice(car.price)}`}
            </strong>
            <button className="btn-warning col-3 me-2">
              VIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
