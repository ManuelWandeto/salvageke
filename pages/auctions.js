import {
  Container,
  Row,
  Pagination,
} from "react-bootstrap";
import styles from "../styles/auctions.module.css";
import { IoMdCart } from "react-icons/io";
import AuctionItem from "../components/AuctionItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { paginate } from "../utils";

const Auctions = () => {
  const [items, setItems] = useState(null);
  const [active, setActive] = useState(1);
  useEffect(() => {
    axios
      .get("http://localhost:8000/auctions")
      .then((response) =>
        setItems(paginate(response.data.cars, 4))
      )
      .catch((e) => console.log(e.message));
  }, []);
  return (
    <section className="content">
      <Container
        fluid="md"
        className={styles.filter}
      ></Container>
      {items ? (
        <div className={`${styles.items} p-3`}>
          <Row className="justify-content-around">
            <strong className="col-3 p-0 text-center align-middle">
              <IoMdCart className={`me-1 ${styles.icon}`} />
              {items.totalItems} Items
            </strong>
            <Pagination className="col-6 m-0">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item active>{2}</Pagination.Item>
              {items.totalPages - 2 > 5 && (
                <Pagination.Ellipsis />
              )}

              <Pagination.Item>
                {items.totalPages}
              </Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Row>
          {items.pages[0].items.map((item) => (
            <AuctionItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p>No auction items found </p>
      )}
    </section>
  );
};

export default Auctions;
