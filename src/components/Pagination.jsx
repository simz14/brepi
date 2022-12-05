import Page from "./Page";
import React from "react";
import styled from "styled-components";

const PagesWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;
`;

const Pagination = ({ beersPerPage, totalBeers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBeers / beersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PagesWrapper>
        {pageNumbers.map((number) => {
          return <Page key={number} number={number} paginate={paginate} />;
        })}
      </PagesWrapper>
    </nav>
  );
};

export default Pagination;
