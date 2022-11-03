import { useState } from 'react';

const usePlanetsFilters = () => {
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: '',
      sort: '',
    },
  });

  return [filters, setFilters];
};

export default usePlanetsFilters;
