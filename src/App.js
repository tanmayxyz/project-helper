import React from 'react';

import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import NavBar from './components/layouts/NavBar'
import DashBoard from './components/dashboard/DashBoard';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={DashBoard} />

        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
