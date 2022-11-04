import styled from 'styled-components';

export const TableRow = styled.tr`
  border: 1px solid var(--borders);
  padding: 8px;

  :nth-child(even) {
    background-color: #213445;
  }

  :nth-child(odd) {
    background-color: #324e68;
  }

  :hover {
    background-color: #341927;
  }

  td:last-child {
    display: flex;
    justify-content: space-between;
    border: none;
  }
`;

export const TableData = styled.tbody`
  td {
    border: 1px solid var(--borders);
    padding: 8px;
  }
`;
