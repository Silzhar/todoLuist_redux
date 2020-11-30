import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Mainpage } from './components/Mainpage'
import { Navbar } from './components/Navbar'
import { UrgentTask } from './components/UrgentTask/UrgentTask'
import { RemainingTask } from './components/RemainingTask'
import { CompletTask } from './components/CompletTask/CompletTask'
import { Events } from './components/Events/Events'
import { Notes } from './components/Notes/Notes'

import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Mainpage}/>

        <Route path='/urgent' exact component={UrgentTask}/>

        <Route path='/remaining' exact component={RemainingTask}/>

        <Route path='/complet' exact component={CompletTask}/>

        <Route path='/events' exact component={Events}/>

        <Route path='/notes' exact component={Notes}/>
      </Switch>
      
    </div>
    </Router>    
  )
}

export default App
