import {
  Container,
  Row,
} from "react-bootstrap";
import Pagination from '../components/Pagination';
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
    const res = await axios.get(`${process.env.BACKEND_API}/auctions?page=${page}&limit=${limit}`);
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
            <Pagination onPageChange={(activePage)=> {
              Router.push({
                pathname: '/auctions',
                query: {page: activePage}
              })
            }} totalPages={totalPages} className="col-6 m-0 justify-content-center"/>
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
