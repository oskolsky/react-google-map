import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { KEY_CODE } from 'helpers/keycodes'

import styles from './Dialog.scss'

class Dialog extends React.Component {
    static propTypes = {
        content: PropTypes.node.isRequired,
        isOpened: PropTypes.bool.isRequired,
        onCloseDialog: PropTypes.func.isRequired,
    }

    componentWillMount() {
        window.addEventListener('keydown', this.handleKeyDown, true)
        window.addEventListener('click', this.handleOutsideClick, true)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown, true)
        window.removeEventListener('click', this.handleOutsideClick, true)
    }

    handleKeyDown = (e) => {
        if (this.props.isOpened) {
            if (e.keyCode === KEY_CODE.ESC) {
                this.props.onCloseDialog()
                e.stopImmediatePropagation()
            }
        }
    }

    handleOutsideClick = (e) => {
        if (this.props.isOpened && !this._dialog.contains(e.target)) {
            this.props.onCloseDialog()
        }
    }

    render() {
        const classNameBase = classNames(styles.base, {
            [styles.isOpened]: this.props.isOpened,
        })

        return (
            <div className={classNameBase}>
                <div className={styles.dialog} ref={(c) => this._dialog = c}>
                    <div className={styles.close} onClick={this.props.onCloseDialog}>Закрыть</div>
                    <div className={styles.body}>
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialog
