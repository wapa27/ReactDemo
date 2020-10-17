/* Note that this file has termparily two components; 
  1. Header itself, and 2. Dropdown menu for
  the smaller screen
This is due to some bug with Heroku rendering that I will 
resolve later on */
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../styles/StoragePlace.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactDropdown from "./ContactDropdown";
import OutsideClickHandler from "react-outside-click-handler";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Wrapper for header to establish width and space on page
const HeaderContainer = styled.header`
  display: block;
  height: 80px;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid gray;

  @media (max-width: 540px) {
    height: 60px;

    margin: auto;
  }
`;

// Inner-wrapper for header content
const NavContainer = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 540px) {
    justify-content: space-between;
  }
`;

// Logo Container
const MainLogo = styled(Link)`
  display: flex;
  justify-content: center;
  width: 7%;
  margin-left: 3%;
  @media (max-width: 540px) {
    float: left;
  }
  @media (max-width: 806px) {
    margin-left: 5%;
  }
`;

// Contains 'Store With Us' and 'About Us' 
const LinkSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 1%;
  width: 28%;
  z-index: 1;
  @media (max-width: 540px) {
    display: none;
  }
`;

// Put this in here to make sure link was confined to text in 
// styled link 
const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
`;
// Links for Sign In section
const StyledLink = styled(NavLink)`
  @import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Abel", sans-serif;
  font-size: 17px;
  font-weight: 20;
  height: 100%;
  /* width: 100%; */
  text-decoration: none;
  color: rgb(31, 30, 30);

  &:hover {
    color: gray;
  }
  &.active {
    color: #4caf50;
  }

  @media (max-width: 1000px) {
    font-size: 13px;
  }

  @media (max-width: 806px) {
    display: none;
  }
`;

// Wrapper for Sign In section
const SignInSection = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-self: flex-end;
  margin: 0 0 0 5%;
  width: 40%;
  @media (max-width: 540px) {
    display: none;
  }
`;

/* _____________________
Code for Hamburger Dropdown; refer to Dropdown.js for comments
*/
const Experiment = styled.div`
  display: block;
  margin: auto 30px auto auto;
  position: relative;
  background-color: white;

  @media (min-width: 806px) {
    visibility: collapse !important;
    background-color: orange;
  }
`;

const ExperimentalButton = styled.button`
  float: right;
  height: 44px;
  width: 38px;
  padding: 0;

  border: none;
  background: none;
  @media (min-width: 806px) {
    visibility: collapse !important;
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  z-index: -1;
  height: 400px;
  width: 300px;
`;

const PrimarySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  @media only screen and (min-width: 540px) and (max-width: 628px) {
    margin-right: 35px;
  }
`;

const LinkToSomething = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 16px;
  text-align: center;
  border-top: 1px solid rgb(194, 209, 209);
  text-decoration: none;

  &:hover {
    color: gray;
  }
`;

const LinkToContact = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 50%;
  font-size: 16px;
  text-align: center;
  border-top: 1px solid rgb(194, 209, 209);
  text-decoration: none;

  &:hover {
    color: gray;
  }
`;

const ExitButton = styled.button`
  align-self: flex-end;
  height: 16.5%;
  width: 40px;
  font-size: 18px;
  text-align: right;
  border: none;
  background: none;
  text-align: center;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20%;
  width: 100%;
  /* background: orange; */
  border-top: 1px solid rgb(194, 209, 209);
  transition: 0.4s;
  &:hover {
    height: 32%;
    justify-content: space-around;
  }
`;

const DropdownMenu = () => {
  const [open, setOpen] = useState(false); // for the menu
  const [contactHover, setContactHover] = useState(false);
  return (
    <Experiment>
      {!open && (
        <ExperimentalButton
          onClick={() => {
            if (!open) {
              setOpen((open) => true);
            }
          }}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ height: "39px", width: "35px" }}
          />
        </ExperimentalButton>
      )}
      {open && (
        <OutsideClickHandler
          onOutsideClick={() => {
            if (open) {
              setOpen((open) => false);
              console.log(open);
            }
          }}
        >
          <Dropdown>
            <PrimarySection>
              <ExitButton
                to="/about"
                onClick={() => {
                  if (open) {
                    setOpen((open) => false);
                  }
                }}
              >
                X
              </ExitButton>
              <LinkToSomething to="/about">Store With Us</LinkToSomething>
              <LinkToSomething to="/about">About Us</LinkToSomething>

              <ContactWrapper
                onMouseEnter={() => setContactHover(true)}
                onMouseLeave={() => setContactHover(false)}
              >
                {!contactHover && (
                  <LinkToSomething to="/about" style={{ border: "none" }}>
                    Contact Us
                  </LinkToSomething>
                )}

                {contactHover && (
                  <LinkToContact
                    to="/about"
                    style={{ border: "none", marginBottom: "-10px" }}
                  >
                    Email Us
                  </LinkToContact>
                )}
                {contactHover && (
                  <LinkToContact
                    to="/about"
                    style={{ border: "none", marginTop: "-10px" }}
                  >
                    714-337-3176
                  </LinkToContact>
                )}
              </ContactWrapper>

              <LinkToSomething to="/about">
                Pay Your Bill Online
              </LinkToSomething>
              <LinkToSomething to="/about">Sign In</LinkToSomething>
            </PrimarySection>
          </Dropdown>
        </OutsideClickHandler>
      )}
    </Experiment>
  );
};

/* End Dropdown menu code */

// Header component
const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <MainLogo to={"/"}>
          <img
            src={logo}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              minWidth: "150px",
            }}
          />
        </MainLogo>
        <LinkSection>
          <StyledLink to={"/availabilities"}>Store With Us</StyledLink>
          <StyledLink to={"/about"}>About</StyledLink>
        </LinkSection>
        <ContactDropdown />

        <SignInSection>
          <StyledLinkWrapper>
            <StyledLink to={"/about"} style={{ marginRight: "-60px" }}>
              Pay Your Bill Online
            </StyledLink>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <StyledLink to={"/about"} style = {{marginRight: "-95px"}}>Sign In</StyledLink>
          </StyledLinkWrapper>
        </SignInSection>
        <DropdownMenu />
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
