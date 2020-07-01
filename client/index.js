import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SongList from './components/SongList';
import App from './components/App';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

const client = new ApolloClient({});
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path='/'>
          <App>
            <Route exact path={'/'}>
              <SongList />
            </Route>
            <Route path='/songs/new' component={SongCreate} />
            <Route path='/songs/id/:id' component={SongDetail} />
          </App>
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
