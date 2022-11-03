import React, { useState, useContext } from 'react';

import PlanetsContext from '../../context/PlanetsContext';

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

  return (
    <form onSubmit={ applyFilter }>
      <label htmlFor="column-filter">
        Filtrar por coluna:
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
          value={ column }
          onChange={ ({ target }) => setColumn(target.value) }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Operador:
        <select
          name="comparison-filter"
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ comparison }
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
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
