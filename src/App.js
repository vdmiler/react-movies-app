import React from 'react';
import { Route, Switch } from 'react-router';
import './App.scss';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Help from './components/Help/Help';
import Main from './components/Main/Main';
import MovieDetail from './components/MovieDetail/MovieDetail';

const App = () => {
  return (
    <div className="page">
      <Header />
      <div className="main">
        <div className="container">
          <Switch>
            <Route
              path="/react-movies-app"
              exact
              component={Main}
            />
            <Route
              path="/react-movies-app/help"
              exact
              component={Help}
            />
            <Route
              path="/react-movies-app/contacts"
              exact
              component={Contacts}
            />
            <Route
              path="/react-movies-app/movies/:name"
              exact
              component={MovieDetail}
            />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
