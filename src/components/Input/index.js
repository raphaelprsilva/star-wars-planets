import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Input = ({
  id,
  label,
  type,
  name,
  value,
  dataTestId,
  placeholder,
  handleChange,
}) => (
  <S.InputWrapper type={ type }>
    <label htmlFor={ id }>
      {label}
    </label>
    <S.Input
      placeholder={ placeholder }
      data-testid={ dataTestId }
      type={ type }
      name={ name }
      value={ value }
      id={ id }
      onChange={ handleChange }
    />
  </S.InputWrapper>
);

Input.defaultProps = {
  placeholder: '',
};

Input.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
