import styles from "../styles/auctions.module.css";
import { BsSpeedometer, BsGearFill } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa";
import { MdCategory, MdLocationPin } from "react-icons/md";
import { RiAuctionFill } from "react-icons/ri";
import { formatPrice } from "../utils";
import {css} from '@emotion/react';

const ListGroupItem = ({ label, value, icon }) => {
  const Icon = icon;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>
        <Icon
          className={`me-2 ${styles.icon}`}
          color="rgba(43,71,147,0.5)"
        ></Icon>
        <strong>{label}:</strong>
      </span>
      <span className="list-group-text-item col-8"
      css={css`
        font-family: var(--ff-body-text);
        font-size: var(--fs-caption);
        text-align: end;
      `}
      >{value}</span>
    </li>
  );
};
const AuctionItem = ({ item }) => {
  return (
    <div className="card my-3 col-md-6 col-xl-4">
      <div
        className="card-img-top"
        title={item.title}
        style={{
          backgroundImage: `url(${item.images[0]})`,
        }}
      ></div>
      <div
        className="card-body"
        style={{ backgroundColor: "#E4E4E4" }}
      >
        <h2 className="card-title"
        css={css`
          font-size: var(--fs-heading);
        `}
        >{item.title}</h2>
        <div className="row justify-content-between">
          <strong className="col-7">
            <RiAuctionFill
              className={`me-2 ${styles.icon}`}
            />
            highest bid:
          </strong>
          <span
            className="col-5 text-end"
            css ={css`
              font-size: var(--fs-secondary);
              font-weight: 600;
              color: white;
              background-color: #2b4793;
              font-family: var(--ff-body-text);
              border-radius: 3px;
            `}
          >
            KSH {formatPrice(item.price)}
          </span>
        </div>
        <ul className="list-group list-group-flush my-3">
          <ListGroupItem
            label="Mileage"
            value={item.mileage}
            icon={BsSpeedometer}
          />
          <ListGroupItem
            label="Engine"
            value={item.engine}
            icon={FaGasPump}
          />
          <ListGroupItem
            label="Gearbox"
            value={item.transmission}
            icon={BsGearFill}
          />
          <ListGroupItem
            label="Category"
            value={
              item.condition === "N"
                ? "Non structurally damaged repairable"
                : item.condition === "S"
                ? "Structurally damaged repairable"
                : "Not recorded"
            }
            icon={MdCategory}
          />
          <ListGroupItem
            label="Location"
            value={item.location}
            icon={MdLocationPin}
          />
        </ul>
      </div>
    </div>
  );
};
export default AuctionItem;
