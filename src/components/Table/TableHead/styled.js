import styled from 'styled-components';

export const TableHead = styled.thead`
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: var(--darkYellow);
    color: white;
    border: 1px solid var(--borders);
    padding: 8px;
  }

  th:last-child {
    width: 175px;
  }
`;
