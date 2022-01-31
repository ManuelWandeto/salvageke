import Header from "../components/Header";
import AuctionCarousel from "../components/Carousel";
import AuctionForm from "../components/AuctionForm.js";
import { Container } from "react-bootstrap";
import styles from "../styles/index.module.css";

const Home = () => {
  return (
    <>
      <Header></Header>
      <section className={styles.content}>
        <Container>
          <div className="col-sm-12">
            <div className="row">
              <h1 className={styles.h1}>
                Welcome to Salvage Kenya
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Officiis natus magni,
                expedita vel perferendis hic dolorum aliquid
                quasi et officia ullam necessitatibus,
                consectetur quae tempore consequuntur
                distinctio architecto accusantium nesciunt!
              </p>
            </div>
          </div>
          <div className="block mb-4">
            <div className={styles.home_block_header}>
              <h2>Sell your Car</h2>
              <p>
                <strong className={styles.strong}>
                  We buy any vehicle in any condition with a
                  fixed price guarantee
                </strong>
              </p>
            </div>
            <AuctionForm />
          </div>
          <div className="block">
            <div className={styles.home_block_header}>
              <h2>Online Auction</h2>
              <p>
                <strong className={styles.strong}>
                  Featured vehicles, car parts and all that
                  jazz
                </strong>
              </p>
            </div>
            <AuctionCarousel />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
