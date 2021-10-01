import { Button, Loader } from "components/gen";
import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context";
import moment from "moment";

function Table({ data }) {
  const { appState } = useContext(AppContext);

  return (
    <Styledtbl>
      <thead>
        <tr>
          <th>CATEGORY</th>
          <th>SEVERITY</th>
          <th>LOCATION</th>
          <th>TIME</th>
          <th>VIEW DETAILS</th>
          <th>DISPATCH</th>
        </tr>
      </thead>

      <tbody>
        {!appState.reports ||
          (appState.reports?.length === 0 && (
            <tr id="loader">
              <Loader height={50} width={50} />
            </tr>
          ))}
        {appState.reports?.map(
          ({ category, severity, area, createdAt }, idx) => {
            const time = moment.unix(createdAt.seconds).fromNow();
            return (
              <tr key={idx}>
                <td>
                  {category?.charAt(0).toUpperCase() + category?.slice(1)}
                </td>
                <td>
                  {severity?.charAt(0).toUpperCase() + severity?.slice(1)}
                </td>
                <td>{area}</td>
                <td>{time}</td>
                <td>
                  <Button title="View Details" />
                </td>
                <td>
                  <Button title="Dispatch" color="green_0" />
                </td>
              </tr>
            );
          }
        )}
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

  #loader {
    display: flex;
    justify-content: center;
    border: 1px solid;
    display: block;
    width: 100%;
  }
`;
