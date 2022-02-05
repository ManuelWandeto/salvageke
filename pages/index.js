import Header from "../components/Header";
import AuctionCarousel from "../components/Carousel";
import AuctionForm from "../components/AuctionForm.js";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <section className="content">
        <Container fluid="md">
          <div className="col-sm-12">
            <div className="row">
              <h1>Welcome to Salvage Kenya</h1>
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
            <div style={{ marginTop: "3.5px" }}>
              <h2>Sell your Car</h2>
              <p>
                <strong>
                  We buy any vehicle in any condition with a
                  fixed price guarantee
                </strong>
              </p>
            </div>
            <AuctionForm />
          </div>
          <div className="block">
            <div style={{ marginTop: "3.5px" }}>
              <h2>Online Auction</h2>
              <p>
                <strong>
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
