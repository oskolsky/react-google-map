import thunkMiddleware from 'redux-thunk'
import { promiseMiddleware } from './promise_middleware'

let middlewares = [
    thunkMiddleware,
    promiseMiddleware,
]

export default middlewares
