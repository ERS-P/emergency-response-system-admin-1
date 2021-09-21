import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import { ReactComponent as Arrow } from "../../../assets/svgs/arrow-up.svg";
import { ReactComponent as Toggle } from "../../../assets/svgs/toggle-off.svg";

const BottomSheet = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1em 1.5em;
  width: 23.5%;
  border-radius: 0.5em;

  p {
    margin: 0;
  }

  #upper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    #upper-upper {
      padding: 0;

      p {
        color: #8a9aac;
        font-weight: 900;
        font-size: 0.8em;
        margin: 0;
      }

      #figure {
        font-size: 1.5em;
        margin: 0;
      }
    }

    #upper-lower {
      p {
        color: #656485;
        font-weight: 700;
        font-size: 1.2em;
      }
    }
  }

  #lower {
    // border: 1px solid black;
    #timespan {
      font-weight: 1;
      color: #a9b4c1;
      font-size: 0.9em;
    }
  }
`;

const StatCard = ({ title = "EMERGENCY", icon = Toggle, bg = "orange" }) => {
  return (
    <BottomSheet>
      <div id="upper">
        <div id="upper-upper">
          <p>{title}</p>
          <p id="figure">0</p>
        </div>
        <div id="upper-lower">
          <Badge icon={icon} bg={bg} />
        </div>
      </div>

      <div id="lower">
        <p style={{ color: "#2dce8a" }}>
          <Arrow
            fill="#2dce8a"
            style={{ height: ".8em", width: ".8em", margin: 0 }}
          />{" "}
          3.48% {"    "}
          <span id="timespan"> Since last month </span>
        </p>
      </div>
    </BottomSheet>
  );
};

export default StatCard;
