import { Carousel } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { paginate } from "../utils";
//responsible for fetching data to render on carousel

const AuctionCarousel = () => {
  const [repo, setRepo] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/auctions")
      .then((response) =>
        setRepo(paginate(response.data.cars, 4).pages)
      )
      .catch((e) => console.log(e.message));
  }, []);

  return repo ? (
    <Carousel className="carousel-dark">
      {repo.map((page) => (
        <Carousel.Item key={page.pageNumber}>
          <div className="row">
            {page.items.map((car) => (
              <Card car={car} key={car.id} />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  ) : (
    <p>Carousel has no data!</p>
  );
};

export default AuctionCarousel;
