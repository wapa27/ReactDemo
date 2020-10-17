import React from "react";
import style from "styled-components";

// Container for List elements
const Listings = style.div`
  overflow: contain;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;

  @media(max-width: 900px) {
    display: none
  }
  @media (min-width: 900px) and (max-width: 1224px) {
    width: 20%;
  }
`;

// Individual listings
const Listing = style.div`
  width: 100%;
  border-bottom: 1px solid gray;
  min-height: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Sits above set of individual listings (Listings)
const ListingsHeader = style.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid gray;

  @media (min-width: 900px) and (max-width: 1150px) {
    font-size: 18px;
  }
`;

// Component
const Availabilities = () => {
  return (
    <Listings>
      <ListingsHeader>Recent Availabilites</ListingsHeader>
      <Listing>20x70 RV Space</Listing>
      <Listing>30x30 Box Room</Listing>
      <Listing>30x30 Box Room</Listing>
      <Listing>30x30 Box Room</Listing>
      <Listing>30x30 Box Room</Listing>
    </Listings>
  );
};

export default Availabilities;
