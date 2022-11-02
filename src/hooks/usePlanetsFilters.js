import { useState } from 'react';

const usePlanetsFilters = () => {
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  return [filters, setFilters];
};

export default usePlanetsFilters;
