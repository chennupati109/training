import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Ensure path and filename are correct
import TravelLogPage from './pages/TravelLogPage'; // Ensure path and filename are correct
import LoginPage from './pages/LoginPage'; // Ensure path and filename are correct
import Navbar from './components/Navbar'; // Ensure path and filename are correct

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/travel-logs" exact component={TravelLogPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch> 
    </Router>
  );
};

export default App;
