import React, { Component } from 'react';
import EndNav from './components/BottomNavigation';
import Login from './components/Login';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import logo from './logo.png';
import {orange700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT || 'https://xb9vxxznul.execute-api.us-east-1.amazonaws.com/production/graphql',
});

const client = new ApolloClient({
  networkInterface,
});

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange700
  }
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <AppBar
            title="London Ruislip Congregation"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          
          <Login />
          <div>
          <image src={logo} Alt='Logo' style={{ width: '40', height: '100' }}/>
            </div>
          <EndNav />
        </div>
          
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
