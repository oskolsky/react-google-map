import React from 'react'
import PropTypes from 'prop-types'

import { Map } from 'components'

import styles from './Wrapper.scss'

export default class Wrapper extends React.Component {
    static propTypes = {
        location: PropTypes.shape({
            coords: PropTypes.shape({
                latitude: PropTypes.number.isRequired,
                longitude: PropTypes.number.isRequired,
            }).isRequired,
        }).isRequired,
        getLocation: PropTypes.func.isRequired,
    }

    componentWillMount() {
        this.props.getLocation()
    }

    render() {
        return (
            <div className={styles.base}>
                <div className={styles.map}>
                    <Map center={this.props.location.coords} />
                </div>
            </div>
        )
    }
}
