import React from 'react'
import {Switch,Route} from "react-router-dom";
import Home from '../../pages/home'
import HomeContext from '../../contexts/homeContext';
import Flight from '../../pages/flight'

function Main() {
 return (
  <main>
  <Switch>
  <HomeContext>
  <Route exact={true} path='/' component={Home} />
  <Route exact={true} path='/flight' component={Flight} />
  </HomeContext>
  </Switch>
  </main>
 )
}

export default Main
