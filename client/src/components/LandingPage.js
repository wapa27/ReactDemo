import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import StorageUnitImg from "../styles/StorageUnit.jpg";
import Availabilites from "./AvailabilitiesMini";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFighterJet,
  faMedkit,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

// Wrapper
const GlobalContent = styled.div`
  overflow-x: hidden;
  display: block;
  padding: auto;
  /* height: 100vh; */
  width: 100%;
`;

// Wrapper for First section 
const MainSection = styled.section`
  display: block;
  margin: 20px auto;
  /* border: 1px dotted gray; */
  width: 90%;
`;

// Inner-wrapper for top section
const TopSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 10px 0;
`;

// Background image from unsplash
const CoverImage = styled.div`
  /* border: 1px solid brown; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url(${StorageUnitImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 65%;
  min-height: 617px;
  color: white;

  @media (max-width: 900px) {
    width: 100%;
    min-height: 500px;
  }
  @media (min-width: 900px) and (max-width: 1224px) {
    width: 75%;
    min-height: 320px;
  }
`;

// Text Wrapper within Cover Image
const CoverImageHeader = styled.h1`
  width: 90%;
  justify-self: start;
  align-self: start;
  margin: 35px;
  font-size: 65px;
  line-height: 155%;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 55px;
  }
`;

// Fun little perks over the Cover Image
const CoverImagePerks = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
`;

// Individual Perks 
const CoverImagePerk = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 33.3%;
  border: 1px solid pink;
  font-size: 1.2rem;
  font-weight: 400;
  border-left: none;
  border-right: none;
`;

// Section beneath Cover Image
const DiscountsSection = styled.section`
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 160px;
  width: 90%;
  overflow: hidden;
  transition: 0.5s;
  &:hover {
    height: 190px;
  }
`;

// Wrapper for Special Offers
const Discount = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  text-align: left;
  /* width: 40%; */
  height: 100%;
  width: 47%;
  margin: 10px 0;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 30px;
  overflow: hidden;
  
`;

// Individual "Links" to special offers
const SpecialOffer = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 800;
  font-size: 27px;
  margin-top: 10px;

  &:hover {
    /* text-decoration: underline #08038f; */
    cursor: default;
  }

  @media (max-width: 807px) {
    font-size: 1.2rem;
  }
`;

const SpecialOfferDescription = styled.span`
  display: block;
  color: #ad0a18;
  font-size: 17px;
  text-align: inherit;
  margin-top: 12px;
  margin-left: 2px;

  @media (max-width: 807px) {
    font-size: 14px;
    line-height: 25px;
  }
`;

// Styling my mini-logos
const FontAwesomeIconWithMedia = styled(FontAwesomeIcon)`
  @media (max-width: 807px) {
    display: none;
  }
`;

// Landing Page Component
const LandingPage = (props) => {
  const [open, setOpen] = useState(false);  // use to expand special offers for active duty ...
  return (
    <GlobalContent>
      <Header />
      <MainSection>
        <TopSection>
          <CoverImage>
            <CoverImageHeader>
              The Safest Solution To Your ABQ Storage Needs.
            </CoverImageHeader>
            <CoverImagePerks>
              <CoverImagePerk>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ marginRight: "8px" }}
                />
                Personal Storage
              </CoverImagePerk>
              <CoverImagePerk
                style={{
                  borderLeft: "1px solid gray",
                  borderRight: "1px solid gray",
                }}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{
                    marginRight: "8px",
                  }}
                />
                Vehicle Storage
              </CoverImagePerk>
              <CoverImagePerk>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ marginRight: "8px" }}
                />
                Around-the-clock Security
              </CoverImagePerk>
            </CoverImagePerks>
          </CoverImage>
          <Availabilites />
        </TopSection>
      </MainSection>
      <DiscountsSection onMouseEnter = {() => setOpen(true)} onMouseLeave = {() => setOpen(false)}>
        <Discount >
          <FontAwesomeIconWithMedia
            icon={faFighterJet}
            style={{
              marginRight: "10px",
              color: "#AD0A18",
              height: "35px",
              width: "52px",
            }}
          />
          <div style={{ display: "inline-block" }}>
            <SpecialOffer to="#">
              Thank You To Those Who Have Served
              <SpecialOfferDescription>
                Special Offers To Veterans & Active Duty
              </SpecialOfferDescription>
            </SpecialOffer>
            {open && <div style = {{fontSize: "15px", marginTop: "10px"}}>
              10% dicount for active duty and our veterans, make sure to indicate your veteran status in your account dashboard!
            </div>}
          </div>
        </Discount>
        <Discount>
          <FontAwesomeIconWithMedia
            icon={faMedkit}
            style={{
              marginRight: "10px",
              color: "#AD0A18",
              height: "35px",
              width: "52px",
            }}
          />
          <div style={{ display: "inline-block" }}>
            <SpecialOffer to="#">
              And A Big Thanks To Our First Responders
              <SpecialOfferDescription>
                Special Offers For First Responders
              </SpecialOfferDescription>
            </SpecialOffer>
            {open && <div style = {{fontSize: "15px", marginTop: "10px"}}>
              10% dicount for active duty and our first responders, make sure to tell us your first responder role in the dashboard!
            </div>}
          </div>
        </Discount>
      </DiscountsSection>
      <Footer />
    </GlobalContent>
  );
};

export default LandingPage;
