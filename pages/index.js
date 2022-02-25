import Header from "../components/Header";
import AuctionCarousel from "../components/Carousel";
import AuctionForm from "../components/AuctionForm.js";
import { Container } from "react-bootstrap";
import axios from "axios";
import { paginate } from "../utils";

export async function getStaticProps() {
  try {
    const host = process.env.BACKEND_API;
    const response = await axios.get(
      host + "/auctions?featured"
    );

    return {
      props: {
        featuredAuctions: paginate(response.data, 4).pages,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log(
      `error occured fetching data in getStaticprops${error}`
    );
  }
  return {
    props: {
      featuredAuctions: undefined,
    },
  };
}
const Home = ({ featuredAuctions }) => {
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
          <div className="mb-4 block">
            <div style={{ marginTop: "3.5px" }}>
              <h1>Sell your Car</h1>
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
              <h1>Online Auction</h1>
              <p>
                <strong>
                  Featured vehicles, car parts and all that
                  jazz
                </strong>
              </p>
            </div>
            <AuctionCarousel featured={featuredAuctions} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
