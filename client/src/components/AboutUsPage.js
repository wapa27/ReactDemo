import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import MyMapComponent from "./GoogleMaps";

// Will contain page main content
const MainContent = styled.section`
  margin: 30px auto 30px auto;
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  @media (max-width: 950px) {
    display: block;
  }
`;

// Contains the text section of page
const TextBox = styled.p`
  margin: 0;
  width: 45%;
  @media (max-width: 950px) {
    margin: auto;
    margin-bottom: 25px;
    width: 100%;
  }
`;

// The actual description
const Description = styled.div`
  margin: 15px;
  align-content: center;
  line-height: 1.6;
  @media (max-width: 950px) {
    margin: auto;
  }
`;

// Header
const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-size: 30px;
  @media (max-width: 950px) {
    margin: auto;
    margin-top: 20px;
  }
`;

// Container for Google Maps
const MyGoogleWrapper = styled.div`
  width: 45%;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

// Component
const AboutUsPage = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <Title>Keeping Your Stuff Safe At Unbeatable Prices</Title>
      <MainContent>
        <TextBox>
          <h2 style={{ textAlign: "center" }}>About Us</h2>
          <Description>
            Here at ABQ Supermax, we take storage seriously. Here at ABQ
            Supermax, we take storage seriously. Here at ABQ Supermax, we take
            storage seriously. Here at ABQ Supermax, we take storage seriously.
            Here at ABQ Supermax, we take storage seriously. Here at ABQ
            Supermax, we take storage seriously. Here at ABQ Supermax, we take
            storage seriously.
          </Description>
        </TextBox>
        <MyGoogleWrapper>
          <MyMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAW-XUAo-kJfh58max9nhKBbVkWvOdZ4kM&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={
              <div
                style={{
                  height: `100%`,
                }}
              />
            }
            containerElement={
              <div
                style={{
                  margin: "auto",
                  height: `400px`,
                  width: "100%",
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </MyGoogleWrapper>
      </MainContent>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
