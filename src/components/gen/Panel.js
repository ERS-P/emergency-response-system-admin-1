import React from "react";
import { Tab } from "../panel";
import { ReactComponent as Screen } from "../../assets/svgs/desktop.svg";
import { ReactComponent as User } from "../../assets/svgs/user.svg";
import { ReactComponent as Book } from "../../assets/svgs/book-alt.svg";
import { ReactComponent as Calendar } from "../../assets/svgs/calendar.svg";
import { ReactComponent as Marker } from "../../assets/svgs/marker.svg";

const Panel = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 0.14,
        flexDirection: "column",
        padding: "4em 0",
      }}
    >
      <Tab to="/" title="Dashboard" icon={Screen} color="#5e71e4" />
      <Tab to="/users" title="Users" icon={User} color="#fed702" />
      <Tab
        to="/track-location"
        title="Track Location"
        icon={Marker}
        color="#fb6340"
      />
      <Tab to="/report" title="Report" icon={Book} color="#f5365b" />
      <Tab to="/tips" title="Tips" icon={Calendar} color="#2dce8a" />
    </div>
  );
};

export default Panel;
