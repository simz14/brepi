import Page from "./Page";
import React from "react";
import styled from "styled-components";

const PagesWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 20px;
  grid-column: 2/4;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  grid-column: 2/4;
  justify-content: center;
`;

const Pagination = ({ beersPerPage, totalBeers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalBeers / beersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav>
      <PagesWrapper>
        {pageNumbers.map((number) => {
          return <Page key={number} number={number} paginate={paginate} />;
        })}
      </PagesWrapper>
    </Nav>
  );
};

export default Pagination;
