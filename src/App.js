import React from 'react'
import Nav from './todo/nav'
import Content from './todo/content'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route,Switch} from 'react-router-dom'
import Target from './todo/target'
import Goals from './todo/goals'


export default function App() {
  return (
   <Router>
    
       <Route path='/'>
         <Nav/>
          
        
       </Route>

        <Route exact path='/home'> <Content/>  </Route>

       <Route exact path='/target'> <Target/> </Route>

      <Route exact path='/goals'> <Goals/> </Route>

 
   </Router>
  )
}
