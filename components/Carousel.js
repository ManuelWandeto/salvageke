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
    /* 
    take an array of any size and required pageSize
    return an array of objects each with; 
    given pageSize, items on each page and number of pages.

    original -> [1,2,3,4,5,5,6,7,8,9,10] 
    paginate(original, 4)
    returned -> [{page: 1, items: [1,2,3,4], totalPages: 2}]
  */
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
      console.log(`run ${i} time`);
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
          {page.items.map((car) => (
            <Card car={car} key={car.id} />
          ))}
        </Carousel.Item>
      ))}
    </Carousel>
  ) : (
    <p>Carousel has no data!</p>
  );
};

export default AuctionCarousel;
