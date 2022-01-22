import * as React from 'react'
import { DefaultButtonProps } from './Default.types'
import * as styles from './styles.module.scss'

export const Component = (props: DefaultButtonProps) => {
    const { children } = props

    let appearance = props.appearance
    let theme = props.theme
    let size = props.size

    if (appearance === undefined) {
        appearance = 'primary'
    }

    if (theme === undefined) {
        theme = 'default'
    }

    if (size === undefined) {
        size = 'medium'
    }

    return <button
        className={[
            styles.default.button,
            styles.default[`button_${appearance}`],
            styles.default[`button_${theme}`],
            styles.default[`button--${size}`]
        ].join(' ')}
    >{children}</button>
}

export default {
    Component
};