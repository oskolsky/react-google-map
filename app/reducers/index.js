import { combineReducers } from 'redux'

import { dialog } from 'reducers/Dialog'
import { location } from 'reducers/Location'

export default combineReducers({
    dialog,
    location,
})
