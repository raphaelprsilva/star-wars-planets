/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import media from 'styled-media-query';

export const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--borders);
  border-radius: 5px;
  background-color: var(--mediumBackground);

  width: 1200px;
  height: 210px;

  padding: 1rem;
  margin: 1.5rem;

  ${media.lessThan('small')`
    flex-direction: column;
    width: 300px;
  `}
`;
