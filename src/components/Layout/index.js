import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

const Layout = ({ children }) => (
  <S.MainWrapper>
    <S.Title>Star Wars Planets</S.Title>
    {children}
  </S.MainWrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
