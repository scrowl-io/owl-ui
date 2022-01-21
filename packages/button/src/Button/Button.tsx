import * as React from 'react'
import { ButtonProps } from './Button.types'
import * as styles from './styles.module.scss'

export const Button = (props: ButtonProps) => {
    const { children } = props

    let appearance = props.appearance
    let size = props.size

    if (appearance === undefined) {
        appearance = 'primary'
    }

    if (size === undefined) {
        size = 'medium'
    }

    return <button
        className={[
            styles.default.button,
            styles.default[
                `button_${props.theme ? (appearance + '--' + props.theme) : appearance}`
            ],
            styles.default[`button--${size}`]
        ].join(' ')}
    >{children}</button>
}

export default {
    Button
};