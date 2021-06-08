import React from 'react'
import { useSelector } from 'react-redux'
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom"
import './App.scss'
import Menu from './components/Menu'
import Home from './containers/Home'
import Phones from './containers/Phones'
import Footer from './containers/Footer'
import DismissibleAlert from './components/DismissibleAlert'


export default function App () {
  const {alert} = useSelector((state) => state.phones)

  return (
    <HashRouter>
      <Menu />
      {alert.message?
          <DismissibleAlert message={alert.message} severity={alert.severity}/>:
          null
      }
      <Switch>
      <Route
        path='/'
        exact={true}
        render={() => <Home name="home"/>}
      />
      <Route
        path='/phones'
        exact={true}
        render={() => <Phones name="phone"/>}
      />
      </Switch>
      <Footer />
    </HashRouter>
  )
}
