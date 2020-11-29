import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Mainpage } from './components/Mainpage'
import { Navbar } from './components/Navbar';

import './App.css';
import UrgentTask from './components/UrgentTask/UrgentTask';

function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Mainpage}/>

        <Route path='/urgent' exact component={UrgentTask}/>

        <Route path='/remaining'  exact render={() => (
            <UrgentTask/>
          )}/>

        <Route path='/complet' exact render={() => (
            <Mainpage title='Tareas completadas'/>
          )}
        />

        <Route path='/events' exact render={() => (
            <Mainpage title='Próximos eventos'/>
          )}
        />

            <Route path='/notes' exact render={() => (
              <Mainpage title='Notas'/>
            )}
          />

        </Switch>
      
    </div>
    </Router>    
  )
}

export default App
