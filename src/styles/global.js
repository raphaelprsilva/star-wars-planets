import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */

  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    background: var(--background);
    line-height: 1;
    color: var(--texts);
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--backgroundScrollBar);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--borders);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--highlight);
  }

  body {
    --background: #16202c;
    --backgroundScrollBar: #f1f1f1;
    --black: #222;
    --borders: #38444d;
    --borderFocus: #a3a0a0;
    --contrast: #b469ff;
    --contrast3: #0016d2;
    --highlight: #ffe81f;
    --darkYellow: #d2bc00;
    --lightContrast: #cd9ccf;
    --mediumBackground: #192734;
    --postColor: #fff;
    --red: #e3242b;
    --scrollBarColor: #1f36ff;
    --texts: #8899a6;
    --white: #fff;
  }
`;

export default GlobalStyles;
