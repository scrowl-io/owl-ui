import * as React from 'react'
import { DefaultButtonProps } from './Default.types'
import * as styles from './styles.module.scss'

const baseClass = 'owlui-button-default'

export const Component = (props: DefaultButtonProps) => {
    const { children } = props

    let modulePrefix = props.prefix
    let theme = props.theme
    let appearance = props.appearance
    let size = props.size
  
    if (modulePrefix === undefined) {
        modulePrefix = ''
    }

    if (theme === undefined) {
        theme = 'default'
    }

    if (appearance === undefined) {
        appearance = 'primary'
    }

    if (size === undefined) {
        size = 'medium'
    }

    return <button
        className={[
            modulePrefix + styles.default[baseClass],
            modulePrefix + styles.default[`${baseClass}_${theme}`],
            modulePrefix + styles.default[`${baseClass}_${theme}--${appearance}`],
            modulePrefix + styles.default[`${baseClass}--${size}`]
        ].join(' ')}
    >{children}</button>
}

export default {
    Component
};