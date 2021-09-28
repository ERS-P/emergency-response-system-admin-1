import React from "react";
import styled from "styled-components";

function Table() {
  return (
    <Styledtbl>
      <tr>
        <th>TITLE</th>
        <th>EMERGENCY TYPE</th>
        <th>DESCRIPTION</th>
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
      </tr>
      <tr>
        <td>After Flooding Occurs</td>
        <td>flood</td>
        <td>Avoid driving through flooded areas and standing water.</td>
      </tr>
    </Styledtbl>
  );
}

export default Table;

const Styledtbl = styled.table`
  // border: 1px solid black;

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
  }
`;
