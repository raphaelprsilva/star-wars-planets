import React, { useContext } from 'react';
import PlanetsContext from '../../context/PlanetsContext';
import Input from '../Input';

const PlanetsFilters = () => {
  const { filters, setFilters } = useContext(PlanetsContext);
  const { filterByName: { name } } = filters;

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <Input
      dataTestId="name-filter"
      id="name-filter"
      label="Filtro por nome"
      name="name"
      type="text"
      placeholder="Digite o nome do planeta"
      value={ name }
      handleChange={ handleChange }
    />
  );
};

export default PlanetsFilters;
