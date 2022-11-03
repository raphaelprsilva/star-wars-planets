import React from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ columns }) => (
  <thead>
    <tr>
      {columns.map((tableColumn) => (
        <th key={ tableColumn }>{tableColumn}</th>
      ))}
    </tr>
  </thead>
);

TableHead.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableHead;
