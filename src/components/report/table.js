import { Button } from "components/gen";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context";

function Table({ data }) {
  const { appState } = useContext(AppContext);

  return (
    <Styledtbl>
      <thead>
        <tr>
          <th>CATEGORY</th>
          <th>SEVERITY</th>
          <th>LOCATION</th>
          <th>VIEW DETAILS</th>
          <th>DISPATCH</th>
        </tr>
      </thead>

      <tbody>
        {appState.reports.map(({ type, postSeverity }, idx) => {
          return (
            <tr key={idx}>
              <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
              <td>{!!postSeverity ? "High" : "Low"}</td>
              <td>Town</td>
              <td>
                <Button title="View Details" />
              </td>
              <td>
                <Button title="Dispatch" color="green_0" />
              </td>
            </tr>
          );
        })}
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
