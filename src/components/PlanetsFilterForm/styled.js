/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import media from 'styled-media-query';

export const FormWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 1200px;
  height: 210px;

  padding: 1rem;
  margin: 1.5rem;

  ${media.lessThan('small')`
    flex-direction: column;
    width: 300px;
  `}
`;
