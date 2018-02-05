export const OPEN_DIALOG = 'OPEN_DIALOG'
export const CLOSE_DIALOG = 'CLOSE_DIALOG'

export const openDialog = (content) => {
    return {
        type: OPEN_DIALOG,
        content: content,
    }
}

export const closeDialog = () => {
    return {
        type: CLOSE_DIALOG,
    }
}
