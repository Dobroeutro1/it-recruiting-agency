import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { containers, store } from './store'

import '../css/index.css'

if (document.getElementById('pictures')) {
  ReactDOM.render(
    <Provider store={store}>
      <containers.PictureListContainer />
    </Provider>,
    document.getElementById('pictures')
  )
}

if (document.getElementById('modal')) {
  ReactDOM.render(
    <Provider store={store}>
      <containers.ImageModalContainer />
    </Provider>,
    document.getElementById('modal')
  )
}
