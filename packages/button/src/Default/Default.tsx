import * as React from 'react'
import { DefaultButtonProps } from './Default.types'
import * as styles from './styles.module.scss'

const baseClass = 'owlui-button-default'

export const Component = (props: DefaultButtonProps) => {
    const { children } = props

    let appearance = props.appearance
    let theme = props.theme
    let size = props.size
    let modulePrefix = props.prefix

    if (appearance === undefined) {
        appearance = 'primary'
    }
  
    if (theme === undefined) {
        theme = 'default'
    }

    if (size === undefined) {
        size = 'medium'
    }

    if (modulePrefix === undefined) {
        modulePrefix = ''
    }

    return <button
        className={[
            modulePrefix + styles.default[baseClass],
            modulePrefix + styles.default[`${baseClass}_${appearance}`],
            modulePrefix + styles.default[`${baseClass}_${theme}`],
            modulePrefix + styles.default[`${baseClass}--${size}`]
        ].join(' ')}
    >{children}</button>
}

export default {
    Component
};