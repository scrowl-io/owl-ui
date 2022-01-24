import * as React from 'react'
import { DefaultButtonProps } from './Default.types'
import * as styles from './styles.module.scss'

let scope = 'owlui-button-default'

export const Component = (props: DefaultButtonProps) => {
    const { children } = props

    let appearance = props.appearance
    let theme = props.theme
    let size = props.size

    if (props.scope !== undefined) {
        scope = props.scope + scope
    }

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
            styles.default[scope],
            styles.default[`${scope}_${appearance}`],
            styles.default[`${scope}_${theme}`],
            styles.default[`${scope}--${size}`]
        ].join(' ')}
    >{children}</button>
}

export default {
    Component
};