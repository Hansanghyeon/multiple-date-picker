import React from 'react';
import ReactDOM from 'react-dom';
// import { GridThemeProvider } from 'styled-bootstrap-grid';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'moment/locale/ko';
// Components
// import DefLayout from './components/Layout/Def';
// import Grid from '@style/Grid';
import MultiDatePicker from '@molecule/Calendar/MultiDatePicker';

const App = () => {
  return (
    <React.StrictMode>
      <MultiDatePicker />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
