import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const FilterItem = ({ filter, removeFilter }) => (
  <S.FilterItemWrapper key={ filter.column }>
    <S.ItensWrapper>
      <p>{filter.column}</p>
      <p>{filter.comparison}</p>
      <p>{filter.value}</p>
    </S.ItensWrapper>
    <button
      type="button"
      data-testid="filter"
      onClick={ removeFilter }
      data-filter={ `${filter.column}-${filter.comparison}-${filter.value}` }
    >
      X
    </button>
  </S.FilterItemWrapper>
);

FilterItem.propTypes = {
  filter: PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
  removeFilter: PropTypes.func.isRequired,
};

export default FilterItem;
