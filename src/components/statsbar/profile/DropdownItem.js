import React from "react";
import styled from "styled-components";

const DropdownItem = props => {
  return (
    <BottomSheet>
      <props.icon
        fill="#000000"
        style={{ width: ".9em", height: ".9em", marginRight: ".5em" }}
      />
      <p>{props.title}</p>
    </BottomSheet>
  );
};

export default DropdownItem;

const BottomSheet = styled.div`
  display: flex;
  padding: 0.5em 1em;
  cursor: pointer;

  :hover {
    background-color: #eaecef;
  }

  p {
    font-size: 0.85em;
  }
`;
