import { Row, Collapse } from "react-bootstrap";
import Engine from "../../components/Engine";
import {useState, useEffect } from "react";
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
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  
  return engines ? (
    <section className="content container-md">
      <Row className="justify-content-around align-items-center my-4 my-xl-3">
        <h1 className="col-6 align-middle m-0">
          Buy Used Vehicle engines
        </h1>
        <strong className="col-4 text-end">
          {engines.length} Engines
        </strong>
      </Row>
      <Row className="justify-content-between align-items-center my-4 my-xl-0 mx-auto">
        <button
          className="btn btn-warning col-md-4 col-sm-5 d-xl-none"
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
      <Row className="justify-content-between g-0">
        <Collapse in={filterToggle || (viewportWidth >= 1200)} className="mb-4 col-12 col-xl-4" appear >
          <div id="filter">
            <h2 css={css`font-size: var(--fs-default);`}>
              Filter the list
            </h2>
            {selectOptions && (
              <Filters options={selectOptions} />
            )}
          </div>
        </Collapse>
        <div className="col-12 col-xl-8 row g-3">
          {engines.map((engine) => (
            <Engine key={engine._id} engine={engine} />
          ))}
        </div>
      </Row>
    </section>
  ) : (
    <div className="content">
      <h1>Engines not loaded yet</h1>
    </div>
  );
};

export default Engines;
