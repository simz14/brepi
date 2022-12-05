import React from "react";
const Page = ({ number, paginate }) => {
  return (
    <li key={number}>
      <a onClick={() => paginate(number)} href="#">
        {number}
      </a>
    </li>
  );
};

export default Page;
