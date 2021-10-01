import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/loading.json";

const Loader = props => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={props.height}
        width={props.width}
      />
    </div>
  );
};

export default Loader;
