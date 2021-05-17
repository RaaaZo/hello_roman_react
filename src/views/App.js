import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import React from 'react';
import { Wrapper } from './App.styles';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <Redirect to="/group" />
              </Route>
              <Route exact path="/group/:id?">
                <Dashboard />
              </Route>
              <Route path="/add-user">
                <AddUser />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default App;
