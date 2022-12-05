import { useState } from "react";
import styled from "styled-components";

const BeerImage = styled.img`
  width: 100%;
  height: 37em;
`;

const BeerWrapper = styled.div`
  width: 70%;
  margin: 30px;
  height: 1800px;
`;

const Beer = ({ beer }) => {
  const [isActive, setIsActive] = useState(false);

  const isActiveHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <BeerWrapper onClick={isActiveHandler} key={beer.id}>
      <div>
        <div
          style={{
            display: isActive ? "block" : "none",
          }}
        >
          {beer.description}
        </div>
        <BeerImage
          style={{
            display: isActive ? "none" : "block",
          }}
          src={beer.image_url}
          alt="beerImage"
        />
      </div>
      <div>{beer.name}</div>
    </BeerWrapper>
  );
};

export default Beer;
