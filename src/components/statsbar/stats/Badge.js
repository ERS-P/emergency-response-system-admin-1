import React from "react";
import styled from "styled-components";

function Badge({ icon: Icon, bg = "red" }) {
  return (
    <BottomSheet style={{ backgroundColor: bg }}>
      <Icon fill="#ffffff" style={{ width: "1.2em", height: "1.2em" }} />
    </BottomSheet>
  );
}

export default Badge;

const BottomSheet = styled.div`
  //   border: 1px solid black;
  padding: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
