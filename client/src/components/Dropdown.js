/* This file as temporarily been put directly into Header.js 
   due to some rendering error in deployment */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Container element
const Container = styled.div`
  display: block;
  margin: auto 30px auto auto;
  position: relative;
  background-color: white;
  @media (min-width: 806px) {
    visibility: collapse !important;
    background-color: orange;
  }
`;

// Styled button
const StyledDropdownButton = styled.button`
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

// The inner-wrapper for the menu 
const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  z-index: -1;
  height: 400px;
  width: 300px;
`;

// Another wrapper to get things working how we want
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

// Individual links
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

// Exit button will be placed at top of dropdown
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

// Actual Component
const DropdownMenu = () => {
  // Hook for menu toggle
  const [open, setOpen] = useState(false); 

  return (
    <Container>
      {!open && (
        <StyledDropdownButton
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
        </StyledDropdownButton>
      )}
      {open && (
        <OutsideClickHandler
          onOutsideClick={() => {
            if (open) {
              setOpen((open) => false);
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
              <LinkToSomething to="/about">Contact Us</LinkToSomething>
              <LinkToSomething to="/about">
                Pay Your Bill Online
              </LinkToSomething>
              <LinkToSomething to="/about">Sign In</LinkToSomething>
            </PrimarySection>
          </Dropdown>
        </OutsideClickHandler>
      )}
    </Container>
  );
};

export default DropdownMenu;
