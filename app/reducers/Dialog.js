import {
    OPEN_DIALOG,
    CLOSE_DIALOG,
} from 'actions/Dialog'

const initialState = {
    content: '',
    isOpened: false,
}

export const dialog = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG: {
            return {
                ...state,
                content: action.content,
                isOpened: true,
            }
        }
        case CLOSE_DIALOG: {
            return {...state, content: '', isOpened: false }
        }
        default:
            return state
    }
}
