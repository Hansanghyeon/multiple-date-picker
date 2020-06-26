import React from 'react';
import ReactDOM from 'react-dom';
import DefLayout from './components/Layout/Def';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import Grid from './style/Grid';

ReactDOM.render(
  <React.StrictMode>
    <GridThemeProvider gridTheme={Grid}>
      <DefLayout />
    </GridThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
