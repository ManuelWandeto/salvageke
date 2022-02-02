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
      .then((response) =>
        setRepo(paginate(response.data.cars, 4).pages)
      )
      .catch((e) => console.log(e.message));
  }, []);

  const paginate = (dataArr, pageSize) => {
    let startNumber = 0;
    let endNumber = pageSize;
    let pages = [];
    let totalPages = Math.ceil(dataArr.length / pageSize);
    for (let i = 0; i < totalPages; i++) {
      pages.push({
        pageNumber: i + 1,
        items: dataArr.slice(startNumber, endNumber),
      });
      startNumber = endNumber;
      endNumber += pageSize;
    }
    return {
      totalPages,
      pages,
    };
  };
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
