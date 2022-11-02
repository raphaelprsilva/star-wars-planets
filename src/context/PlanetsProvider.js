import PropTypes from 'prop-types';
import React from 'react';

import usePlanets from '../hooks/usePlanets';
import PlanetsContext from './PlanetsContext';

const PlanetsProvider = ({ children }) => {
  const { planets, loading } = usePlanets(null);

  const contextValue = {
    data: planets,
    loading,
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
