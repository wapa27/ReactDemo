import React from "react";
import styled from "styled-components";

// export const Grid = styled.div``;
// export const Row = styled.div`
//   display: flex;
// `;
// export const Col = styled.div`
//   flex: ${(props) => props.size / 12};
// `;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 25vh 75vh 25vh;
`;
