// // refactored this in favor of Grid layout

// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import styled from "styled-components";
// import { baseHeaderStyles } from "../styles/baseStyles";
// import { Grid, Row, Col } from "../styles/gridSystem";
// import logo from "../styles/StoragePlace.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// const OptionsSection = styled(Col)`
//   ${baseHeaderStyles};
//   justify-content: space-around;
//   height: 70%;
// `;

// const MainLogo = styled(Link)`
//   ${baseHeaderStyles};
//   flex: ${(props) => props.size / 12};
//   height: 90%;
//   width: 100%;
// `;

// const StyledLink = styled(NavLink)`
//   @import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
//   ${baseHeaderStyles};
//   flex: ${(props) => props.size / 12};
//   padding: 0;
//   font-family: "Abel", sans-serif;
//   font-size: 19px;
//   font-weight: 20;
//   height: 70%;

//   /* &:hover {
//     background-color: #ddd;
//     color: black;
//   } */
//   &.active {
//     color: #4caf50;
//   }
// `;

// const NavBarContainer = styled(Row)`
//   padding: 8px 0;
//   align-items: center;
//   /* padding: 0 0 0.5rem 0; */
//   height: 5rem;
//   top: 0;
//   left: 0;
//   border-bottom: solid 1px #515351;
// `;

// const Header = () => {
//   return (
//     <NavBarContainer>
//       <MainLogo size={1.5}>
//         <img
//           src={logo}
//           style={{ overflow: "hidden", maxWidth: "100%", maxHeight: "100%" }}
//         />
//       </MainLogo>
//       <OptionsSection size={3}>
//         <StyledLink to={"/availabilities"}>Store With Us</StyledLink>
//         <StyledLink to={"/about"}>About</StyledLink>
//       </OptionsSection>
//       <StyledLink
//         style={{ display: "grid", color: "red", marginLeft: "auto" }}
//         size={1.5}
//         to={"/payment"}
//       >
//         Pay Bill Online
//       </StyledLink>
//     </NavBarContainer>
//   );
// };

// export default Header;
