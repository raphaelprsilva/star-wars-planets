import React from 'react';

import PlanetsProvider from './context/PlanetsProvider';

import PlanetsFilters from './components/PlanetsFilters';
import Table from './components/Table';
import FilterItems from './components/FilterItems';

function App() {
  return (
    <PlanetsProvider>
      <>
        <h1>Star Wars Planets</h1>
        <PlanetsFilters />
        <FilterItems />
        <Table />
      </>
    </PlanetsProvider>
  );
}

export default App;
