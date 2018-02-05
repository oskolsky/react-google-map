import { GET_LOCATION } from 'actions/Location'

const initialState = {
    coords: {
        latitude: 0,
        longitude: 0,
    },
}

export const location = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOCATION: {
            return action.payload
        }
        default:
            return state
    }
}
