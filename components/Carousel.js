import { Carousel } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const AuctionCarousel = ({ featured }) => {
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
