import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Mainpage } from './components/Mainpage'
import { Navbar } from './components/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      
      <Switch>
          <Route path="/complet" exact render={() => (
              <Mainpage title="Tareas completadas"/>
            )}
          />

          <Route path="/urgent" exact render={() => (
              <Mainpage title="Tareas urgentes"/>
            )}
          />

          <Route path="/" exact render={() => (
              <Mainpage title="Tareas pendientes"/>
            )}
          />

        </Switch>
      
    </div>
    </Router>    
  )
}

export default App
