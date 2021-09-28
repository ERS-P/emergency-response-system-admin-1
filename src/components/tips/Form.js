import { Button } from "components/gen";
import React from "react";
import styled from "styled-components";

function Form() {
  return (
    <Stylesheet>
      <div className="row-1">
        <div id="column-11" className="column-1">
          <label>Title</label>
          <input placeholder="Tips" />
        </div>
        <div id="column-12" className="column-1">
          <label>Emergency Type</label>
          <select>
            <option>Fire</option>
            <option>Flood</option>
            <option>Violence</option>
            <option>Accident</option>
            <option>First-Aid</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="row-2">
        <div className="column" id="column-21">
          <label>Description</label>
          <textarea placeholder="Short tip on the emergency"></textarea>
        </div>
      </div>

      <div className="row-3">
        <div className="column" id="column-31">
          <Button title="Send Tips" />
        </div>
      </div>
    </Stylesheet>
  );
}

export default Form;

const Stylesheet = styled.div`
  .row-1 {
    display: flex;
    justify-content: space-between;
    margin: 0 0 2em 0;
  }

  .row-2 {
    display: flex;
    margin: 0 0 2em 0;
  }

  .row-3 {
  }

  input,
  textarea,
  select {
    padding: 1em;
    border: 0.05em solid #e0e2e8;
    border-radius: 0.5em;
    box-shadow: 0px 3px 5px 1px rgba(150, 161, 172, 0.24);
    -webkit-box-shadow: 0px 3px 5px 1px rgba(150, 161, 172, 0.24);
    -moz-box-shadow: 0px 3px 5px 1px rgba(150, 161, 172, 0.24);
  }

  textarea {
    height: 15em;
  }

  label {
    color: #535f7f;
    font-size: 0.8em;
    margin-bottom: 0.5em;
  }

  .column-1 {
    display: flex;
    flex-direction: column;
    width: 48%;
    // border: 1px solid black;
  }

  #column-21 {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
