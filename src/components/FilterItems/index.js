import React, { useContext } from 'react';

import PlanetsContext from '../../context/PlanetsContext';
import FilterItem from './FilterItem';
import * as S from './styled';

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
    <>
      <S.Title>Filtros Aplicados</S.Title>
      <S.Wrapper>
        {filterByNumericValues.length > 0 ? (
          filterByNumericValues.map((filter) => (
            <FilterItem
              key={ filter.column }
              filter={ filter }
              removeFilter={ removeFilter }
            />
          ))
        ) : (
          <p>Nenhum filtro numérico aplicado</p>
        )}
      </S.Wrapper>
    </>
  );
};

export default FilterItems;
