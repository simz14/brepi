import React, { useState } from "react";
import styled from "styled-components";

const PageNum = styled.div`
  cursor: pointer;
  &&:hover {
    font-weight: 800;
  }
`;

const Page = ({ number, paginate }) => {
  return (
    <li key={number}>
      <PageNum
        onClick={() => {
          paginate(number);
        }}
      >
        {number}
      </PageNum>
    </li>
  );
};

export default Page;
