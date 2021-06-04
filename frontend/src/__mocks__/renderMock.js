import React from 'react'
import { Provider } from 'react-redux'
import {render as tlRender} from "@testing-library/react"
import store from '../js/app/store'

const render = (ui) => {
  const Wrapper = ({children}) => <Provider store={store}>{children}</Provider>
  return tlRender(ui, {wrapper: Wrapper})
}


export default render