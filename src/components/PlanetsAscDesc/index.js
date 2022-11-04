import React, { useState, useContext } from 'react';

import Select from '../Select';
import Input from '../Input';
import Button from '../Button';

import * as S from './styled';

import PlanetsContext from '../../context/PlanetsContext';
import { columnsOptions } from '../../helpers/options';

const PlanetsAscDesc = () => {
  const [column, setColumn] = useState('population');
  const [order, setOrder] = useState('ASC');
  const { filters, setFilters } = useContext(PlanetsContext);

  const setAscDescFilter = (event) => {
    event.preventDefault();
    setFilters({
      ...filters,
      order: {
        column,
        sort: order,
      },
    });
  };

  return (
    <S.FormWrapperAscDesc onSubmit={ setAscDescFilter }>
      <Select
        name="column-sort"
        label="Ordenar:"
        value={ column }
        handleChange={ ({ target }) => setColumn(target.value) }
        options={ columnsOptions }
      />
      <S.InputsWrapper>
        <Input
          dataTestId="column-sort-input-asc"
          id="column-sort-input-asc"
          label="Ascendente"
          name="order"
          type="radio"
          value={ order }
          handleChange={ () => setOrder('ASC') }
        />
        <Input
          dataTestId="column-sort-input-desc"
          id="column-sort-input-desc"
          label="Descendente"
          name="order"
          type="radio"
          value={ order }
          handleChange={ () => setOrder('DESC') }
        />
      </S.InputsWrapper>
      <Button
        type="submit"
        data-testid="column-sort-button"
        name="Ordenar"
      />
    </S.FormWrapperAscDesc>
  );
};

export default PlanetsAscDesc;
