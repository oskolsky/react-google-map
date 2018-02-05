import React from 'react'
import { shallow } from 'enzyme'

import Dialog from '../Dialog'

function setup(options) {
    const props = {
        content: 'This is Dialog',
        isOpened: false,
        onCloseDialog: jest.fn(),
    }

    const enzymeWrapper = shallow(
        <Dialog {...props} {...options} />
    )

    return {
        props,
        enzymeWrapper,
    }
}

let enzymeWrapper = null

describe('Dialog specification', () => {
    afterEach(() => {
        enzymeWrapper.unmount()
    })

    it('renders correctly', () => {
        enzymeWrapper = setup().enzymeWrapper

        expect(enzymeWrapper).toMatchSnapshot()
    })

    it('is opened renders correctly', () => {
        enzymeWrapper = setup({ isOpened: true }).enzymeWrapper

        expect(enzymeWrapper).toMatchSnapshot()
    })
})
