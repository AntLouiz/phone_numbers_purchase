import React from 'react'
import {
  Switch,
  Route,
  HashRouter
} from "react-router-dom"
import './App.scss'
import Menu from './components/Menu'
import Home from './containers/Home'
import Purchase from './containers/Purchase'
import MyPhones from './containers/MyPhones'
import Footer from './containers/Footer'


export default function App () {
  return (
    <HashRouter>
      <Menu />
      <Switch>
      <Route
        path='/'
        exact={true}
        render={() => <Home name="home"/>}
      />
      <Route
        path='/purchase'
        exact={true}
        render={() => <Purchase name="phone"/>}
      />
      <Route
        path='/my-numbers'
        exact={true}
        render={() => <MyPhones name="myPhones"/>}
      />
      </Switch>
      <Footer />
    </HashRouter>
  )
}
