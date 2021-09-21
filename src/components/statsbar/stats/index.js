import React from "react";
import styled from "styled-components";
import StatCard from "./StatCard";
import { ReactComponent as Users } from "../../../assets/svgs/users.svg";
import { ReactComponent as Calendar } from "../../../assets/svgs/calendar.svg";
import { ReactComponent as Percent } from "../../../assets/svgs/percent.svg";

const BottomSheet = styled.div`
  display: flex;
  //   border: 1px solid white;
  padding: 1em 2.2em 1em 2.2em;
  justify-content: space-between;
`;

const stats = () => {
  return (
    <BottomSheet>
      <StatCard bg="#0CCCEF" />
      <StatCard bg="#FB6240" icon={Users} title="NEW USERS" />
      <StatCard bg="#FED702" icon={Calendar} title="TIPS" />
      <StatCard bg="#2DCD89" icon={Percent} title="PERFORMANCE" />
    </BottomSheet>
  );
};

export default stats;
