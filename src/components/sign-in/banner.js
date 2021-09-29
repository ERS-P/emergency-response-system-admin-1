import React from "react";
import styled from "styled-components";

function banner() {
  return (
    <StyledBanner>
      <div className="banner-title">
        <h2>Welcome!</h2>
      </div>

      <div className="banner-body">
        <p>
          Administrator Panel provides necessary features to manage <br />{" "}
          emergency situations
        </p>
      </div>
    </StyledBanner>
  );
}

export default banner;

const StyledBanner = styled.div`
  padding: 4em 0;

  .banner-title {
    padding: 0 0 0.5em 0;
    h2 {
      text-align: center;
      margin: 0;
    }
  }

  .banner-body {
    padding: 0.5em 0;
    p {
      text-align: center;
      margin: 0;
    }
  }
`;
