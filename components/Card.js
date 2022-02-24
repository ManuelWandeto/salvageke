import { formatPrice } from "../utils";
import {css } from "@emotion/react";
import {FaChevronRight} from 'react-icons/fa';

const Card = ({ car }) => {
  return (
    <div className="mb-3 col-md-6 col-lg-3">
      <div className="card">
        <div
          title={car.title}
          className="card-img-top"
          style={{
            backgroundImage: `url(${car.images[0]})`,
          }}
        ></div>
        <div className="card-body">
          <h2 className="card-title">{car.title}</h2>
          <div className="row justify-content-between g-0">
            <strong className="col-6 col-lg-12" css={css`
              font-size: var(--fs-caption);
            `}>
              {`KSH ${formatPrice(car.price)}`}
            </strong>
            <button className="btn-warning col-4 col-lg-12 mt-lg-2" css={css`
                font-size: var(--fs-caption);
                font-family: var(--ff-body-text);
                border-radius: 3px;
            `}>
              VIEW
              <FaChevronRight className="ms-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
