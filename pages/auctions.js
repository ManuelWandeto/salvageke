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
  const [totalPages, setTotalPages] = useState(null);
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API}/auctions?page=${activePage}&limit=${4}`
      )
      .then((response) => {
        setItems(response.data.results);
        setTotalPages(response.data.totalPages);
      })
      .catch((e) => console.log(e.message));
  }, [activePage]);
  const createPagination = (totalPages) => {
    let pageItems = [];
    for (let i = 1; i <= totalPages; i++) {
      pageItems.push(
        <Pagination.Item
          key={i}
          active={i === activePage}
          onClick={() => setActivePage(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pageItems;
  };
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
                  totalPages === 1 || activePage === 1
                }
              />
              <Pagination.Prev
                onClick={() =>
                  setActivePage((prev) => prev - 1)
                }
                disabled={
                  totalPages === 1 || activePage === 1
                }
              />
              {totalPages <= 4 ? (
                createPagination(totalPages)
              ) : (
                <>
                  {createPagination(2)}
                  {activePage > 2 &&
                    activePage < totalPages && (
                      <>
                        <Pagination.Item
                          key={activePage}
                          active={true}
                        >
                          {activePage}
                        </Pagination.Item>
                      </>
                    )}
                  <Pagination.Ellipsis />
                  <Pagination.Item
                    key={totalPages}
                    active={totalPages === activePage}
                    onClick={() =>
                      setActivePage(totalPages)
                    }
                  >
                    {totalPages}
                  </Pagination.Item>
                </>
              )}
              <Pagination.Next
                onClick={() =>
                  setActivePage((prev) => prev + 1)
                }
                disabled={
                  totalPages === 1 ||
                  activePage === totalPages
                }
              />
              <Pagination.Last
                onClick={() => setActivePage(totalPages)}
                disabled={
                  totalPages === 1 ||
                  activePage === totalPages
                }
              />
            </Pagination>
          </Row>
          {items.map((item) => (
            <AuctionItem key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <p>No auction items found </p>
      )}
    </section>
  );
};

export default Auctions;
