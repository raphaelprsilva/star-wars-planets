import React, { useState, useContext } from 'react';

import PlanetsContext from '../../context/PlanetsContext';

import Select from '../Select';
import Input from '../Input';

import { columnsOptions, comparisonOptions } from '../../helpers/options';

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

  const removeAllFilters = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [],
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
      <Input
        dataTestId="value-filter"
        id="value-filter"
        label="Valor:"
        name="value-filter"
        type="number"
        placeholder="Digite o valor"
        value={ value }
        handleChange={ ({ target }) => setValue(target.value) }
      />
      <button type="submit" data-testid="button-filter">Filtrar</button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Limpar filtros
      </button>
    </form>
  );
};

export default PlanetsFilterForm;
