import { Carousel } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { paginate } from "../utils";
//responsible for fetching data to render on carousel

const AuctionCarousel = () => {
  const [featured, setFeaturedAuctions] = useState(null);
  useEffect(() => {
    const host = process.env.NEXT_PUBLIC_API;
    axios
      .get(`${host}/auctions?featured`)
      .then((response) =>
        setFeaturedAuctions(
          paginate(response.data, 4).pages
        )
      )
      .catch((e) => console.log(e.message));
  }, []);
  return featured ? (
    <Carousel className="carousel-dark">
      {featured.map((page) => (
        <Carousel.Item key={page.pageNumber}>
          <div className="row">
            {page.items.map((car) => (
              <Card car={car} key={car._id} />
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
