export const promiseMiddleware = ({ dispatch }) => {
    function isPromise(val) {
        return val && typeof val.then === 'function'
    }

    return next => action => {
        return isPromise(action.payload) ? action.payload.then(
            result => dispatch({...action, payload: result}),
            error => dispatch({...action, payload: error, error: true })
        ) : next(action)
    }
}
