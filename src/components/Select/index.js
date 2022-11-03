import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, label, value, handleChange, options }) => (
  <div>
    <label htmlFor={ name }>{label}</label>
    <select
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
    </select>
  </div>
);

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

export default Select;
