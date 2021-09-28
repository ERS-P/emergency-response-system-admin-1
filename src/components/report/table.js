import { Button } from "components/gen";
import React from "react";
import styled from "styled-components";

function Table() {
  return (
    <Styledtbl>
      <tr>
        <th>TITLE</th>
        <th>SEVERITY</th>
        <th>LOCATION</th>
        <th>VIEW DETAILS</th>
        <th>DISPATCH</th>
      </tr>

      <tr>
        <td>Flood Emergency reported at Legon</td>
        <td>Low</td>
        <td>Legon</td>
        <td>
          <Button title="View Details" />
        </td>
        <td>
          <Button title="Dispatch" color="green_0" />
        </td>
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
    padding: 1.5em 1.5em;
    border-top: 1px solid #f3f4f6;
    color: #6b7280;
    background-color: #f7f9fc;
  }

  td {
    font-size: 0.8em;
    border-top: 1px solid #f3f4f6;
    border-bottom: 1px solid #f3f4f6;
    padding: 1.5em 1.5em;
    color: #6b7280;
  }
`;
