import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '../../sass/App.sass'
import store from './store'
import Counter from '../components/Counter'


function App () {
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
