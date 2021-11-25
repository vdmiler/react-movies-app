import React from 'react';
import { Route } from 'react-router';
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
          <Route
            path="/"
            exact
            component={Main}
          />
          <Route
            path="/help"
            exact
            component={Help}
          />
          <Route
            path="/contacts"
            exact
            component={Contacts}
          />
          <Route
            path="/movies/:name"
            exact
            component={MovieDetail}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
