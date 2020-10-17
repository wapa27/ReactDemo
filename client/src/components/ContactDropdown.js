import React, { useState } from "react";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";

// 'Contact Us' button
const StyledButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
  text-align: inherit;
  font-family: "Abel", sans-serif;
  font-size: 17px;
  font-weight: 20;
  height: 100%;
  text-decoration: none;
  border: none;
  background-color: inherit;
  color: rgb(31, 30, 30);

  &:hover {
    color: gray;
    cursor: pointer;
  }
  &:focus {
    outline: none;
    color: #ad0a18;
  }

  @media (max-width: 1000px) {
    font-size: 13px;
  }

  @media (max-width: 806px) {
    display: none;
  }
`;

// This is the div dropdown
const ActualDropdown = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid rgb(214, 214, 214);
  z-index: 1;
  height: 197px;
  width: 146px;
  background-color: rgb(255, 255, 255);

  &:hover {
    cursor: pointer;
  }
`;

// Individual Links on the dropdown
const LinkToSomething = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  height: 40%;
  font-size: 16px;
  text-align: center;
  border-top: 1px solid rgb(194, 209, 209);
  text-decoration: none;

  &:hover {
    color: red;
  }
`;

// Will sit as the top button in the drowpdown div
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

// Component
const ContactDropdown = () => {
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState(false);
  return (
    <div
      style={{
        zIndex: "1",
        width: "12%",
        minWidth: "100px",
        marginLeft: "3%",
      }}
    >
      <StyledButton onClick={() => setOpen(!open)}>Contact Us</StyledButton>
      {open && (
        <OutsideClickHandler
          onOutsideClick={() => {
            if (open) {
              setOpen((open) => false);
              console.log(open);
            }
          }}
        >
          <ActualDropdown>
            <ExitButton
              onClick={() => {
                if (open) {
                  setOpen((open) => false);
                  setNumber((open) => false);
                }
              }}
            >
              X
            </ExitButton>
            <LinkToSomething>Direct Message</LinkToSomething>
            <LinkToSomething
              onMouseEnter={() => setNumber(!number)}
              onMouseLeave={() => setNumber(!number)}
            >
              {number ? (
                <span>714-337-3176</span>
              ) : (
                <span>Give Us A Call!</span>
              )}
            </LinkToSomething>
          </ActualDropdown>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default ContactDropdown;
