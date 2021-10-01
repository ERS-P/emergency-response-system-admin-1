import React, { useEffect, useState } from "react";
import styled from "styled-components";
import pfp from "../../../assets/img/pfp.png";
import Dropdown from "./Dropdown";
import { getAuth } from "../../../firebase";

function RightProfile() {
  const [show, setShow] = useState(true);
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
      <img src={pfp} id="pfp" />
      <p id="name">{currentUser?.displayName || currentUser?.email || "..."}</p>

      <Dropdown setShow={setShow} show={show} />
    </BottomSheet>
  );
}

export default RightProfile;

const BottomSheet = styled.div`
  cursor: pointer;
  position: relative;
  //border: 1px solid;
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
`;

// import React, { useRef, useEffect } from "react";
// // import useOutsideAlerter from "../../utils/ClickOutsideDetector";

// function OutsideAlerter(props) {
//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef);

//   return <div ref={wrapperRef}>{props.children}</div>;
// }

// export default OutsideAlerter;
