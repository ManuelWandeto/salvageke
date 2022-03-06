import { Row, Collapse } from "react-bootstrap";
import Engine from "../../components/Engine";
import {useState } from "react";
import axios from "axios";
import Filters from "../../components/EngineFilterForm";
import { getSelectOptions } from "../../utils";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Router from 'next/router';
import Pagination  from "../../components/Pagination";
import {css} from '@emotion/react';

export async function getServerSideProps({query}) {
  try {
    const page = query.page || 1;
    const limit = 4;
    const res = await axios.get(`${process.env.BACKEND_API}/engines?page=${page}&limit=${limit}`);
    const filterOptions = getSelectOptions(res.data.results);
    return {
      props: {engines: res.data.results, selectOptions: filterOptions, totalPages: res.data.totalPages}
    }
  } catch (error) {
    console.log(`error occured fetching engines in getServerSideProps: ${error}`);
    return {
      props: {engines: null, selectOptions: null}
    } 
  }

}
const Engines = ({engines, selectOptions, totalPages}) => {
  const [filterToggle, toggleFilter] = useState(false);
  return engines ? (
    <section className="content container-md">
      <Row className="justify-content-around align-items-center my-4">
        <h1 className="col-6 align-middle m-0">
          Buy Used Vehicle engines
        </h1>
        <strong className="col-4 text-end">
          {engines.length} Engines
        </strong>
      </Row>
      <Row className="justify-content-between align-items-center my-4 mx-auto">
        <button
          className="btn btn-warning col-5 d-lg-none"
          onClick={() => toggleFilter((toggle) => !toggle)}
          aria-controls="filter"
          aria-expanded={filterToggle}
          css={css`
            font-family: var(--ff-body-text);
            font-size: var(--fs-caption);
            font-weight: 600;
          `}
        >
          Show filter options
          {filterToggle ? (
            <FaChevronUp className="ms-2" />
          ) : (
            <FaChevronDown className="ms-2" />
          )}
        </button>
        <Pagination onPageChange={(activePage) => {
          Router.push({
            pathname: '/parts/engines',
            query: {page: activePage}
          })
        }} totalPages={totalPages} className="col m-0 justify-content-end p-0"/>
      </Row>
      <Collapse in={filterToggle} className="mb-4">
        <div id="filter">
          <h2 style={{ fontSize: 21, fontWeight: 600 }}>
            Filter the list
          </h2>
          {selectOptions && (
            <Filters options={selectOptions} />
          )}
        </div>
      </Collapse>
      <Row className="g-md-2 gy-4 gy-md-4">
        {engines.map((engine) => (
          <Engine key={engine._id} engine={engine} />
        ))}
      </Row>
    </section>
  ) : (
    <div className="content">
      <h1>Engines not loaded yet</h1>
    </div>
  );
};

export default Engines;
