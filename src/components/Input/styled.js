import styled from 'styled-components';
import media from 'styled-media-query';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === 'radio' ? 'row' : 'column')};
  margin-right: 1rem;
  height: ${(props) => (props.type === 'radio' && '40px')};
  align-items: ${(props) => (props.type === 'radio' && 'center')};

  label {
    margin-bottom: 0.5rem;
    font-weight: bolder;
  }
`;

export const Span = styled.span`
  align-self: flex-end;
  font-weight: bolder;
  font-size: 0.75rem;
  color: var(--red);
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid var(--borders);
  border-radius: 5px;
  margin-bottom: 0.75rem;
  box-sizing: border-box;
  outline: none;
  transition: 0.3s;
  -webkit-transition: 0.3s;

  width: ${(props) => (props.type === 'radio' ? '40px' : '300px')};
  height: ${(props) => (props.type === 'radio' ? '15px' : '45px')};
  left: 454px;
  top: 525px;

  ${media.lessThan('small')`
      width: 250px;
    `}

  :focus {
    border: 1.3px solid var(--borderFocus);
  }
`;
