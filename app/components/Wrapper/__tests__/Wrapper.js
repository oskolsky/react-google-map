import React from 'react'
import { shallow } from 'enzyme'

import Wrapper from '../Wrapper'

function setup(options) {
    const props = {
        location: {
            coords: {
                latitude: 0,
                longitude: 0,
            },
        },
        getLocation: jest.fn(),
        onOpenDialog: jest.fn(),
    }

    const enzymeWrapper = shallow(
        <Wrapper {...props} {...options} />
    )

    return {
        props,
        enzymeWrapper,
    }
}

let enzymeWrapper = null

describe('Wrapper specification', () => {
    afterEach(() => {
        enzymeWrapper.unmount()
    })

    it('renders correctly', () => {
        enzymeWrapper = setup().enzymeWrapper

        expect(enzymeWrapper).toMatchSnapshot()
    })
})
