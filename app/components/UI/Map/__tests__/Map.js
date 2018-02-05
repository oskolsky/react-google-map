import React from 'react'
import { shallow } from 'enzyme'

import Map from '../Map'

function setup(options) {
    const props = {
        center: {
            latitude: 0,
            longitude: 0,
        },
        zoom: 10,
    }

    const enzymeWrapper = shallow(
        <Map {...props} {...options} />
    )

    return {
        props,
        enzymeWrapper,
    }
}

let enzymeWrapper = null

describe('Map specification', () => {
    afterEach(() => {
        enzymeWrapper.unmount()
    })

    it('renders correctly', () => {
        enzymeWrapper = setup().enzymeWrapper

        expect(enzymeWrapper).toMatchSnapshot()
    })
})
