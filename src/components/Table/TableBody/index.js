import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

const TableBody = ({ arr, compare, name }) => (
  <S.TableData>
    {arr
      .sort(compare)
      .filter((planet) => planet.name.includes(name))
      .map((planet) => (
        <S.TableRow key={ planet.name }>
          <td data-testid="planet-name">{planet.name}</td>
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
        </S.TableRow>
      ))}
  </S.TableData>
);

TableBody.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      climate: PropTypes.string,
      created: PropTypes.string,
      diameter: PropTypes.string,
      edited: PropTypes.string,
      films: PropTypes.arrayOf(PropTypes.string),
      gravity: PropTypes.string,
      name: PropTypes.string,
      orbital_period: PropTypes.string,
      population: PropTypes.string,
      residents: PropTypes.arrayOf(PropTypes.string),
      rotation_period: PropTypes.string,
      surface_water: PropTypes.string,
      terrain: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
  compare: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default TableBody;
