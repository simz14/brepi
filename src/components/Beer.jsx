import { useState } from "react";
import styled from "styled-components";

const BeerImage = styled.img`
  width: 100%;
  height: 25em;
`;

const BeerWrapper = styled.div`
  display: grid;
  width: 70%;
  margin: 30px;
  height: 500px;
  justify-items: center;
  border-radius: 15px;
  border: 2px solid black;
  padding: 10px;
`;

const BeerContent = styled.div`
  display: flex;
  align-self: center;
`;

const BeerName = styled.div`
  display: flex;
  align-self: flex-end;
`;

const Beer = ({ beer }) => {
  const [isActive, setIsActive] = useState(false);

  const isActiveHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <BeerWrapper onClick={isActiveHandler} key={beer.id}>
      <BeerContent>
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
      </BeerContent>
      <BeerName>{beer.name}</BeerName>
    </BeerWrapper>
  );
};

export default Beer;
