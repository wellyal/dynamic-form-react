import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';

// locals
import App from '~/components/pages/App';
import registerServiceWorker from '~/registerServiceWorker';
import {theme} from '~/config';
import "~/index.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
