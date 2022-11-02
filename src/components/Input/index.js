import React from 'react';
import PropTypes from 'prop-types';

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
  <div>
    <label htmlFor={ id }>
      {label}
      <input
        placeholder={ placeholder }
        data-testid={ dataTestId }
        type={ type }
        name={ name }
        value={ value }
        id={ id }
        onChange={ handleChange }
      />
    </label>
  </div>
);

Input.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
