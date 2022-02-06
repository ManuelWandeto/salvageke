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
  const [activePage, setActivePage] = useState(1);
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
              <Pagination.First
                onClick={() => setActivePage(1)}
                disabled={
                  items.totalPages === 1 || activePage === 1
                }
              />
              <Pagination.Prev
                onClick={() =>
                  setActivePage((prev) => prev - 1)
                }
                disabled={
                  items.totalPages === 1 || activePage === 1
                }
              />
              {items.totalPages <= 4 ? (
                items.pages.map((page) => (
                  <Pagination.Item
                    key={page.pageNumber}
                    active={page.pageNumber === activePage}
                    onClick={() =>
                      setActivePage(page.pageNumber)
                    }
                  >
                    {page.pageNumber}
                  </Pagination.Item>
                ))
              ) : (
                <>
                  {items.pages.slice(0, 2).map((page) => (
                    <Pagination.Item
                      key={page.pageNumber}
                      active={
                        page.pageNumber === activePage
                      }
                      onClick={() =>
                        setActivePage(page.pageNumber)
                      }
                    >
                      {page.pageNumber}
                    </Pagination.Item>
                  ))}
                  <Pagination.Ellipsis />
                  <Pagination.Item
                    key={page.pageNumber}
                    active={page.pageNumber === activePage}
                    onClick={() =>
                      setActivePage(page.pageNumber)
                    }
                  >
                    {page.pageNumber}
                  </Pagination.Item>
                </>
              )}
              <Pagination.Next
                onClick={() =>
                  setActivePage((prev) => prev + 1)
                }
                disabled={
                  items.totalPages === 1 ||
                  activePage === items.totalPages
                }
              />
              <Pagination.Last
                onClick={() =>
                  setActivePage(items.totalPages)
                }
                disabled={
                  items.totalPages === 1 ||
                  activePage === items.totalPages
                }
              />
            </Pagination>
          </Row>
          {items.pages[activePage - 1].items.map((item) => (
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
