import React from 'react';

import PlanetsProvider from './context/PlanetsProvider';

import PlanetsFilters from './components/PlanetsFilters';
import Table from './components/Table';

function App() {
  return (
    <PlanetsProvider>
      <>
        <h1>Star Wars Planets</h1>
        <PlanetsFilters />
        <Table />
      </>
    </PlanetsProvider>
  );
}

export default App;
