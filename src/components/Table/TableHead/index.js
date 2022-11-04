import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const TableHead = ({ columns }) => (
  <S.TableHead>
    <tr>
      {columns.map((tableColumn) => (
        <th key={ tableColumn }>{tableColumn}</th>
      ))}
    </tr>
  </S.TableHead>
);

TableHead.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHead;
