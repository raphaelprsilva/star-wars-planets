import styled from 'styled-components';

export const FilterItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 250px;
  max-width: 300px;
  padding: 10px;
  border: 1px solid var(--borders);
  border-radius: 5px;
  background-color: #e6e7ed;

  button {
    margin: 0 2.5px;
    background-color: var(--red);
    color: var(--white);
    border: none;
    border-radius: 50%;
    padding: 6px;
    cursor: pointer;
  }
`;

export const ItensWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  max-width: 300px;
  padding: 10px;

  p {
    margin: 0 2.5px;
  }
`;
