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
import Router from 'next/router';

export async function getServerSideProps({ query }) {
  try {
    const page = query.page || 1;
    const limit = 4;
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/auctions?page=${page}&limit=${limit}`);
    const totalPages = res.data.totalPages;
    return {
      props: { auctions: res.data.results, totalPages: totalPages}
    };
    
  } catch (error) {
    console.log(`error fetching auctions in getServerSideProps: ${error}`)
  }
  return {
    props: {auctions: null, totalPages: null}
  }
}
const Auctions = ({ auctions, totalPages }) => {
  const [activePage, setActivePage] = useState(1);
  useEffect(()=>{
    Router.push({
      pathname: '/auctions',
      query: {page: activePage}
    })
  }, [activePage])
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
      {auctions ? (
        <div className={`${styles.items} p-3`}>
          <Row className="justify-content-around">
            <strong className="col-3 p-0 text-center align-middle">
              <IoMdCart className={`me-1 ${styles.icon}`} />
              {auctions.totalItems} Items
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
          <Row>
            {auctions.map((item) => (
              <AuctionItem key={item._id} item={item} />
            ))}
          </Row>
        </div>
      ) : (
        <p>No auction items found </p>
      )}
    </section>
  );
};

export default Auctions;
