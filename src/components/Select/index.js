import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Select = ({ name, label, value, handleChange, options }) => (
  <S.SelectWrapper>
    <label htmlFor={ name }>{label}</label>
    <S.SelectOptions
      name={ name }
      id={ name }
      data-testid={ name }
      value={ value }
      onChange={ handleChange }
    >
      {options.map((option) => (
        <option key={ option } value={ option }>
          {option}
        </option>
      ))}
    </S.SelectOptions>
  </S.SelectWrapper>
);

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
