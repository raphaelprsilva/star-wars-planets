import React, { useContext } from 'react';

import PlanetsContext from '../../context/PlanetsContext';

const Table = () => {
  const { data: planets, loading, filters } = useContext(PlanetsContext);
  const {
    filterByName: { name },
    filterByNumericValues,
  } = filters;

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

  const filteredByNumericValues = filterPlanetsByNumericValues(filterByNumericValues);
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

  return loading ? (
    <div>Loading...</div>
  ) : (
    <table>
      <thead>
        <tr>
          {setTableColumns(planets).map((tableColumn) => (
            <th key={ tableColumn }>{tableColumn}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planetsToRender
          .filter((planet) => planet.name.includes(name))
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
