import React from "react";
import styled from "styled-components";

function TabButton(props) {
  return (
    <StyledTB
      active={props.active}
      style={{ ...props.style }}
      onClick={props.onClick}
    >
      {props.title}
    </StyledTB>
  );
}

export default TabButton;

const StyledTB = styled.div`
  padding: 0.5em;
  background: ${({ active }) => (active ? "#F3F4F6" : "transparent")}
  cursor: pointer;
  border-radius: 10% 10% 0% 0% / 20% 20% 0% 0%;
  border-width: ${({ active }) => (active ? "1px" : "0 0 1px 0")};
  border-color: #e5e7eb;
  border-style: solid;

  :hover {
    border-width: 1px;
    color: ${({ active }) => (active ? "initial" : "#3b82f6")};
  }
`;
