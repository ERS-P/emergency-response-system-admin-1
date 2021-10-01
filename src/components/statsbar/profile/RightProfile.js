import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pfp from "../../../assets/svgs/user.svg";
import Dropdown from "./Dropdown";
import { getAuth } from "../../../firebase";

function RightProfile() {
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
      console.log(user);
      setCurrentUser(user);
    }
  }, []);

  function toggleDropdownVisibility() {
    setShow(!show);
  }

  return (
    <BottomSheet
      onClick={() => {
        toggleDropdownVisibility();
      }}
    >
      <img
        src={pfp}
        id="pfp"
        alt="pfp"
        style={{ color: "grey", height: ".95em", width: ".95em" }}
      />
      <p id="name">{currentUser?.displayName || currentUser?.email || "..."}</p>

      <Dropdown setShow={setShow} show={show} />
    </BottomSheet>
  );
}

export default RightProfile;

const BottomSheet = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;

  #name {
    color: white;
    font-weight: 600;
    margin: 0 0.5em;
    font-size: 0.9em;
  }

  #pfp {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    object-fit: cover;
  }

  p {
    margin: 0;
  }
`;

// import React, { useRef, useEffect } from "react";
// // import useOutsideAlerter from "../../utils/ClickOutsideDetector";

// function OutsideAlerter(props) {
//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef);

//   return <div ref={wrapperRef}>{props.children}</div>;
// }

// export default OutsideAlerter;
