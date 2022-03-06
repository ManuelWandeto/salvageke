import styles from "../styles/engine.module.css";
import Image from "next/image";
import Styled from '@emotion/styled';
import {css} from '@emotion/react';

const Label = Styled('span')`
  font-family: var(--ff-body-text);
  font-size: var(--fs-caption);
  font-weight: 700;
`
const Value = Styled('span')`
  font-family: var(--ff-body-text);
  font-size: var(--fs-default);
  @media(min-width: 748px) {
    font-size: var(--fs-caption);
  }
  font-weight: 400;
`;
const Engine = ({ engine }) => {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <div className="card">
        <div className={`${styles.title}`}>
          <h2 className="text-center" css={css`
            font-size: var(--fs-default);
          `}>
            {`${engine.year} ${engine.make} ${engine.model}`}
          </h2>
        </div>
        <div css={css`
          position: relative;
          width: 100%;
        `}>
          <Image
            alt={`${engine.year} ${engine.make} ${engine.model}`}
            src={engine.images[0]}
            height={452}
            width={804}
            objectFit="cover"
            objectPosition={"center center"}
            layout="responsive"
          />
        </div>
        <hr className="m-0" />
        <div className="card-body">
          <div className="row align-items-center justify-content-center">
            <div className="col-3 text-center border-end border-info">
              <Label>Size</Label>
              <br />
              <Value>{engine.capacity} cc </Value>
            </div>
            <div className="col-3 text-center border-end border-info">
              <Label>Fuel</Label>
              <br />
              <Value>{engine.fuelType} </Value>
            </div>
            <div className="col-3 text-center border-end border-info">
              <Label>Mileage</Label>
              <br />
              <Value className={styles.mileage}>
                {engine.mileage}
              </Value>
            </div>
            <div className="col-3 text-center border-info">
              <Label>GearBox</Label>
              <br />
              <Value>{engine.gearbox}</Value>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engine;
