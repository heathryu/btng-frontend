import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import DonationDialog from './containers/DonationDialog';
import TransferResult from './containers/TransferResult';
import * as serviceWorker from './serviceWorker';

import Header from './components/Header';
import theme from './theme';
import store from './redux/configureStore';

ReactDOM.render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/" exact component={App} />
              <Route
                path="/transfer-details"
                exact
                component={DonationDialog}
              />
              <Route
                  path="/transfer-result"
                  exact
                  component={TransferResult}
              />
            </Switch>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    </ThemeProvider>
  </StylesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
