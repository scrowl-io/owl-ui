import * as React from 'react'
import { ButtonProps } from './Button.types'
import * as styles from './styles.module.scss'

export const Button = (props: ButtonProps) => {
    const { children } = props

    if (props.appearance === undefined) {
        props.appearance = 'primary'
    }

    if (props.size === undefined) {
        props.size = 'medium'
    }
    
    return <button
        className={[
            styles.default.button,
            styles.default[`button_${props.appearance}`],
            styles.default[`button--${props.size}`]
        ].join(' ')}
    >{children}</button>
}

export default Button;