import { connect } from 'react-redux'

import { Dialog } from 'components'
import { closeDialog } from 'actions/Dialog'

const mapStateToProps = (state) => {
    return {
        content: state.dialog.content,
        isOpened: state.dialog.isOpened,
    }
}

const mapDispatchToProps = {
    onCloseDialog: closeDialog,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog)
