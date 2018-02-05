import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import middlewares from 'middlewares'
import rootReducer from 'reducers'

import {
    Dialog,
    Wrapper,
} from 'containers'

const enhancer = compose(applyMiddleware(...middlewares))
const store = createStore(rootReducer, {}, enhancer)

import 'stylesheets/styles.scss'

const app = (store) => (
    <Provider store={store}>
        <div className="app">
            <Wrapper />
            <Dialog />
        </div>
    </Provider>
)

ReactDOM.render(
    app(store),
    document.getElementById('app'),
)
