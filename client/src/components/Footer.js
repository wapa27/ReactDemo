import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

// Footer is divided into three sections; 1. General info section which 
// contains Forms & Policies, 2. Help Section, 3. Terms/Rights
const GeneralInformationSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  width: 60%;
`;
// Only contains menu for help
const HelpSection = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  width: 40%;
`;

// just meant to be a partiion between sections
const Divider = styled.div`
  margin: auto;
  border-right: 1px solid black;
  height: 85%;
`;

// Wrapper element for General Content
const General = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: top;
  border-top: 1px solid black;
  height: 95px;
  margin: auto;
  padding: 0 5%;
`;

// Very bottom section
const RightsAndTerms = styled.div`
  display: flex;
  justify-content: center;
`;

// General styling for links in the Footer
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const FooterTemplate = ({ className, children }) => {
  return (
    <footer className={className}>
      <General>
        <GeneralInformationSection>
          <div>
            <StyledLink to={"/Privacy"}>Privacy Policy</StyledLink>
          </div>
          <div>
            <StyledLink to={"/Forms"}>Forms</StyledLink>
          </div>
          <div>
            <StyledLink to={"/Storage_Policies"}>Storage Policies</StyledLink>
          </div>
        </GeneralInformationSection>
        <Divider />
        <HelpSection>
          <div>
            <StyledLink to={"#"}>Need Help?</StyledLink>
          </div>
        </HelpSection>
      </General>
      <RightsAndTerms>
        <em>
          ABQSupermax All Rights Reserved |{" "}
          <StyledLink to={"/Terms"}>Terms</StyledLink>{" "}
        </em>
      </RightsAndTerms>
    </footer>
  );
};

const Footer = styled(FooterTemplate)`
  display: block;
  margin-bottom: 15px;
`;

export default Footer;
