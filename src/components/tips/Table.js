import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context";

function Table() {
  const { appState } = useContext(AppContext);

  return (
    <Styledtbl>
      <thead>
        <tr>
          <th>TITLE</th>
          <th>EMERGENCY CATEGORY</th>
          <th>DESCRIPTION</th>
        </tr>
      </thead>

      <tbody>
        {appState.tips.map(({ title, type, description }, idx) => {
          return (
            <tr key={idx}>
              <td>{title}</td>
              <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
              <td>{truncate(description)}</td>
            </tr>
          );
        })}
        {/* <tr>
        <td>After Flooding Occurs</td>
        <td>flood</td>
        <td>Avoid driving through flooded areas and standing water.</td>
      </tr>
      <tr>
        <td>After Flooding Occurs</td>
        <td>flood</td>
        <td>Avoid driving through flooded areas and standing water.</td>
      </tr>
      <tr>
        <td>After Flooding Occurs</td>
        <td>flood</td>
        <td>Avoid driving through flooded areas and standing water.</td>
      </tr> */}
      </tbody>
    </Styledtbl>
  );

  function truncate(input) {
    if (input.length > 30) {
      return input.substring(0, 29) + "...";
    }
    return input;
  }
}

export default Table;

const Styledtbl = styled.table`
  white-space: nowrap;
  overflow: auto;

  background: white;
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    font-size: 0.8em;
    padding: 1em;
    border-top: 1px solid #f3f4f6;
    color: #6b7280;
  }

  td {
    font-size: 0.8em;
    border-top: 1px solid #f3f4f6;
    border-bottom: 1px solid #f3f4f6;
    padding: 1.5em 1em;
    color: #6b7280;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  tbody {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
