import React, { useState, useContext } from 'react';

import PlanetsContext from '../../context/PlanetsContext';
import Select from '../Select';

const columnsOptions = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonOptions = ['maior que', 'menor que', 'igual a'];

const PlanetsFilterForm = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const { filters, setFilters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  const applyFilter = (event) => {
    event.preventDefault();
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    });
  };

  const filteredColumnsOptions = columnsOptions.filter((option) => (
    !filterByNumericValues.some((filter) => filter.column === option)
  ));

  return (
    <form onSubmit={ applyFilter }>
      <Select
        name="column-filter"
        label="Filtrar por coluna:"
        value={ column }
        handleChange={ ({ target }) => setColumn(target.value) }
        options={ filteredColumnsOptions }
      />
      <Select
        name="comparison-filter"
        label="Operador:"
        value={ comparison }
        handleChange={ ({ target }) => setComparison(target.value) }
        options={ comparisonOptions }
      />
      <label htmlFor="value-filter">
        Valor:
        <input
          type="number"
          name="value-filter"
          data-testid="value-filter"
          id="value-filter"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button type="submit" data-testid="button-filter">Filtrar</button>
    </form>
  );
};

export default PlanetsFilterForm;
