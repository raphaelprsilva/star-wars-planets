import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({ name, type, testId, isDisabled, onClick }) => (
  <S.ButtonWrapper
    type={ type === 'submit' ? 'submit' : 'button' }
    data-testid={ testId }
    disabled={ isDisabled }
    onClick={ onClick }
  >
    {name}
  </S.ButtonWrapper>
);

Button.defaultProps = {
  type: 'button',
  testId: 'btn-generic',
  isDisabled: false,
  onClick: () => {},
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  testId: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
