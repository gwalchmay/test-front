import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Archives from './components/Archives';

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <BrowserRouter>
      <Navbar refresh={refresh} setRefresh={setRefresh} />
      <Switch>
        <Route exact path="/">
          <Home refresh={refresh} />
        </Route>
        <Route exact path="/archives" component={Archives} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
