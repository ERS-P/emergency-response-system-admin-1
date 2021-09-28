import { Button } from "components/gen";
import React from "react";
import styled from "styled-components";

function Table() {
  return (
    <Styledtbl>
      <tr>
        <th>FIRST NAME</th>
        <th>LAST NAME</th>
        <th>EMAIL</th>
        <th>PHONE NUMBER</th>
        <th>VIEW MORE</th>
      </tr>

      <tr>
        <td>John</td>
        <td>Quayson</td>
        <td>johnq@gmail.com</td>
        <td>+233 442918231</td>
        <td>
          <Button title="View Details" color="blue_0" />
        </td>
      </tr>

      <tr>
        <td>John</td>
        <td>Quayson</td>
        <td>johnq@gmail.com</td>
        <td>+233 442918231</td>
        <td>
          <Button title="View Details" color="blue_0" />
        </td>
      </tr>
    </Styledtbl>
  );
}

export default Table;

const Styledtbl = styled.table`
  background: white;
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    font-size: 0.8em;
    padding: 1em 1.5em;
    border-top: 1px solid #f3f4f6;
    border-bottom: 1px solid #f3f4f6;
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
