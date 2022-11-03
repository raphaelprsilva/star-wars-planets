import React, { useContext } from 'react';

import PlanetsContext from '../../context/PlanetsContext';

const FilterItems = () => {
  const { filters, setFilters } = useContext(PlanetsContext);
  const { filterByNumericValues } = filters;

  const removeFilter = (event) => {
    const { target: { dataset } } = event;
    const { filter } = dataset;
    const filteredItems = filter.split('-');
    const [column, comparison, value] = filteredItems;
    const newFilters = filterByNumericValues.filter((item) => {
      const isMatched = item.column === column
      && item.comparison === comparison
      && item.value === value;
      return !isMatched;
    });
    setFilters({
      ...filters,
      filterByNumericValues: newFilters,
    });
  };

  return (
    <section>
      <h2>Filter Items</h2>
      {filterByNumericValues.length > 0 ? (
        filterByNumericValues.map((filter) => (
          <div key={ filter.column }>
            <div>
              <p>{filter.column}</p>
              <p>{filter.comparison}</p>
              <p>{filter.value}</p>
            </div>
            <div>
              <button
                type="button"
                data-testid="filter"
                onClick={ removeFilter }
                data-filter={ `${filter.column}-${filter.comparison}-${filter.value}` }
              >
                X
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhum filtro numérico aplicado</p>
      )}
    </section>
  );
};

export default FilterItems;
