import React from 'react';

import PlanetsProvider from './context/PlanetsProvider';

import PlanetsFilters from './components/PlanetsFilters';
import Table from './components/Table';
import FilterItems from './components/FilterItems';
import Layout from './components/Layout';

function App() {
  return (
    <PlanetsProvider>
      <Layout>
        <PlanetsFilters />
        <FilterItems />
        <Table />
      </Layout>
    </PlanetsProvider>
  );
}

export default App;
