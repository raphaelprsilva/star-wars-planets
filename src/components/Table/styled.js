import styled from 'styled-components';
import media from 'styled-media-query';

export const TableWrapper = styled.div`
  ${media.lessThan('medium')`
    overflow-x: auto;
    width: 100%;
  `}
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid var(--borders);
  margin: 1rem 1.5rem;
`;
