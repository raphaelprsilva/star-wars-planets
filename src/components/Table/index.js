import React, { useContext } from 'react';

import PlanetsContext from '../../context/PlanetsContext';

const Table = () => {
  const { data: planets, loading } = useContext(PlanetsContext);

  const setTableColumns = (planetsData) => {
    const columnsKeys = Object.keys(planetsData[0]);
    const columnsWithoutResident = columnsKeys.filter((column) => column !== 'residents');
    const columnsNames = columnsWithoutResident.map((column) => column.replace('_', ' '));
    const columnsNamesCapitalized = columnsNames.map(
      (column) => column.charAt(0).toUpperCase() + column.slice(1),
    );
    return columnsNamesCapitalized;
  };

  return (
    loading ? (
      <div>Loading...</div>
    ) : (
      <table>
        <thead>
          <tr>
            {setTableColumns(planets).map((column) => (
              <th key={ column }>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
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
    )
  );
};

export default Table;
