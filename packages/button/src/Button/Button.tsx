import * as React from 'react'
import { ButtonProps } from './Button.types'
import styles from './styles.scss'

export const Button = (props: ButtonProps) => {
  const { children } = props

  return <button className={[
            styles.button,
            styles[`button_${props.appearance}`],
            styles[`button--${props.size}`]
        ].join(' ')}>{children}</button>
}

export default Button;