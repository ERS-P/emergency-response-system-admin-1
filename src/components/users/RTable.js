import { Button } from "components/gen";
import React from "react";
import styled from "styled-components";

function Table() {
  return (
    <Styledtbl>
      <thead>
        <tr>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>EMAIL</th>
          <th>PHONE NUMBER</th>
          <th>VIEW MORE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rita</td>
          <td>Tetteh</td>
          <td>rittat@gmail.com</td>
          <td>+233 442918231</td>
          <td>
            <Button title="View Details" color="blue_0" />
          </td>
        </tr>

        <tr>
          <td>Michael</td>
          <td>Parry</td>
          <td>mparry@gmail.com</td>
          <td>+233 442918231</td>
          <td>
            <Button title="View Details" color="blue_0" />
          </td>
        </tr>
      </tbody>
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
