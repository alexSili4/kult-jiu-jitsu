import { FC } from 'react';
import { Global, css } from '@emotion/react';
import { involveMedium, involveRegular, theaterBold } from '@/fonts';
import { theme } from '@/constants';

import 'modern-normalize';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: ${theme.fontFamily.involve};
        src: local(${theme.fontFamily.involve}),
          url(${involveRegular}) format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: ${theme.fontFamily.involve};
        src: local(${theme.fontFamily.involve}),
          url(${involveMedium}) format('truetype');
        font-weight: 500;
      }

      @font-face {
        font-family: ${theme.fontFamily.theater};
        src: local(${theme.fontFamily.theater}),
          url(${theaterBold}) format('truetype');
        font-weight: 700;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-y: scroll;
        overflow-x: hidden;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      ul,
      ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      button {
        background-color: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyles;
