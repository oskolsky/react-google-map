import React from 'react'
import PropTypes from 'prop-types'

import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs,
} from 'react-google-maps'

import styles from './Map.scss'

export default class Map extends React.Component {
    static propTypes = {
        center: PropTypes.shape({ latitude: PropTypes.number, longitude: PropTypes.number }),
        zoom: PropTypes.number,
    }

    static defaultProps = {
        zoom: 10,
    }

    render() {
        const center = {
            lat: this.props.center.latitude,
            lng: this.props.center.longitude,
        }

        const MapWithAMarker = withScriptjs(withGoogleMap(() =>
            <GoogleMap defaultCenter={center} defaultZoom={this.props.zoom}>
                <Marker position={center} label="I" />
            </GoogleMap>
        ))

        return (
            <div className={styles.base}>
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCX0yWmVXi9hNkpjAvw1Cfa8N0PV0zaeO8&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                />
            </div>
        )
    }
}
