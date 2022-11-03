import React, { useContext } from 'react';

import PlanetsContext from '../../context/PlanetsContext';
import TableBody from './TableBody';
import TableHead from './TableHead/index';

const SORT_ORDER_FACTOR = -1;

const Table = () => {
  const { data: planets, loading, filters } = useContext(PlanetsContext);
  const { filterByName: { name }, filterByNumericValues, order } = filters;

  const filterPlanetsByNumericValues = (arr) => {
    if (arr.length > 0) {
      return arr.reduce((acc, { column, comparison, value }) => {
        switch (comparison) {
        case 'maior que':
          return acc.filter(
            (planet) => Number(planet[column]) > Number(value),
          );
        case 'menor que':
          return acc.filter(
            (planet) => Number(planet[column]) < Number(value),
          );
        case 'igual a':
          return acc.filter(
            (planet) => Number(planet[column]) === Number(value),
          );
        default:
          return acc;
        }
      }, planets);
    }
    return planets;
  };

  const filteredByNumericValues = filterPlanetsByNumericValues(
    filterByNumericValues,
  );
  const planetsToRender = filteredByNumericValues || planets;

  const setTableColumns = (planetsData) => {
    const columnsKeys = Object.keys(planetsData[0]);
    const columnsWithoutResident = columnsKeys.filter(
      (col) => col !== 'residents',
    );
    const columnsNames = columnsWithoutResident.map((col) => col.replace('_', ' '));
    const columnsNamesCapitalized = columnsNames.map(
      (col) => col.charAt(0).toUpperCase() + col.slice(1),
    );
    return columnsNamesCapitalized;
  };

  const compare = (a, b) => {
    const firstValue = a[order.column] === 'unknown' ? 0 : a[order.column];
    const secondValue = b[order.column] === 'unknown' ? 0 : b[order.column];

    if (order.sort === 'ASC') {
      return Number(firstValue) > Number(secondValue) ? 1 : SORT_ORDER_FACTOR;
    }
    return Number(firstValue) < Number(secondValue) ? 1 : SORT_ORDER_FACTOR;
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <table>
      <TableHead
        columns={ setTableColumns(planetsToRender) }
      />
      <TableBody
        arr={ planetsToRender }
        compare={ compare }
        name={ name }
      />
    </table>
  );
};

export default Table;
