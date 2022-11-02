import PropTypes from 'prop-types';
import React from 'react';

import usePlanets from '../hooks/usePlanets';
import PlanetsContext from './PlanetsContext';
import usePlanetsFilters from '../hooks/usePlanetsFilters';

const PlanetsProvider = ({ children }) => {
  const { planets, loading } = usePlanets(null);
  const [filters, setFilters] = usePlanetsFilters();

  const contextValue = {
    data: planets,
    loading,
    filters,
    setFilters,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
