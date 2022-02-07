import styles from "../styles/engine.module.css";
import Image from "next/image";
const Engine = ({ engine }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <div className={`${styles.title}`}>
          <h2 className="text-center">
            {`${engine.year} ${engine.make} ${engine.model}`}
          </h2>
        </div>
        <Image
          alt={`${engine.year} ${engine.make} ${engine.model}`}
          height={452}
          width={804}
          //   loader={({ src }) => `${src}`}
          src={engine.images[0]}
          objectFit="cover"
          unoptimized={true}
          quality={50}
          layout="responsive"
        />
        <hr className="m-0" />
        <div className="card-body">
          <div className="row align-items-center justify-content-center">
            <div className="col-3 text-center border-end border-info">
              <span className={styles.label}>Size</span>
              <br />
              {engine.capacity}
            </div>
            <div className="col-3 text-center border-end border-info">
              <span className={styles.label}>Fuel</span>
              <br />
              {engine.fuelType}
            </div>
            <div className="col-3 text-center border-end border-info">
              <span className={styles.label}>Mileage</span>
              <br />
              <span className={styles.mileage}>
                {engine.mileage}
              </span>
            </div>
            <div className="col-3 text-center border-info">
              <span className={styles.label}>GearBox</span>
              <br />
              <span>{engine.gearbox}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engine;
