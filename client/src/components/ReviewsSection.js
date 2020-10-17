/* Won't be implementing reviews for awhile */

import React from "react";
import style from "styled-components";

const Listings = style.div`
  overflow: contain;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
`;

const Listing = style.div`
  width: 100%;
  border-bottom: 1px solid gray;
  min-height: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListingsHeader = style.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid gray;
`;

const Reviews = () => {
  return (
    <Listings>
      <ListingsHeader>Write a Review</ListingsHeader>
      <Listing>Best Security On Earth Bro</Listing>
      <Listing>Yo This is Dope</Listing>
      <Listing>These guys keep it gangsta</Listing>
    </Listings>
  );
};

export default Reviews;
