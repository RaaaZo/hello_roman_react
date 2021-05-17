import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import { Wrapper } from './App.styles';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import UsersProvider from 'providers/UsersProvider';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route path="/add-user">
                  <AddUser />
                </Route>
              </Switch>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default App;
