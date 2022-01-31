import { Carousel } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
//responsible for fetching data to render on carousel

const AuctionCarousel = () => {
  const [repo, setRepo] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/auctions")
      .then((response) => setRepo(response.data.cars))
      .catch((e) => console.log(e.message));
  }, []);
  return repo ? (
    <Carousel className="carousel-dark">
      {repo.map((car) => (
        <Carousel.Item key={car.id}>
          <Card car={car} />
        </Carousel.Item>
      ))}
    </Carousel>
  ) : (
    <p>Carousel has no data!</p>
  );
};

export default AuctionCarousel;
