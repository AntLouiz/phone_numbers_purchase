import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './App.sass'
import store from './app/store'
import Counter from './components/Counter'


export default function App () {
  return (
    <div>
      <h1>My Flask + React web app</h1>
      <Counter/>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-app')
)
