import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  min-width: 300px;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-bottom: 3rem;
  border: 1px solid var(--borders);
  border-radius: 5px;
  background-color: var(--mediumBackground);
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--highlight);
  margin-bottom: 1rem;
`;
