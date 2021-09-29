import React from "react";
import styled from "styled-components";

const colors = {
  blue_0: "#13c8e9",
  green_0: "#2dce8a",
  purple_0: "#5e71e4",
};

function Button({
  onClick = () => {},
  title = "button",
  color = colors.blue_0,
  padding,
}) {
  return (
    <Styledbtn
      style={{
        background: colors[color],
        padding: padding ? padding : "0.75em",
      }}
      onClick={onClick}
    >
      <p style={{ color: "#ffffff", fontWeight: "600" }}>{title}</p>
    </Styledbtn>
  );
}

export default Button;

const Styledbtn = styled.button`
  border: 0;
  background-color: #13c8e9;

  padding: 0.75em;
  cursor: pointer;
  border-radius: 0.5em;
  box-shadow: 0px 10px 32px 0px rgba(0, 0, 0, 0.09);
  -webkit-box-shadow: 0px 10px 32px 0px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 10px 32px 0px rgba(0, 0, 0, 0.09);

  p {
    margin: 0;
    font-weight: 500;
    color: white !important;
  }
`;
