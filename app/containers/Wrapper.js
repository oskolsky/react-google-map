import { connect } from 'react-redux'

import { Wrapper } from 'components'
import { getLocation } from 'actions/Location'
import { openDialog } from 'actions/Dialog'

const mapStateToProps = (state) => {
    return {
        location: state.location,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLocation: () => dispatch(getLocation()),
        onOpenDialog: (content) => dispatch(openDialog(content)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
