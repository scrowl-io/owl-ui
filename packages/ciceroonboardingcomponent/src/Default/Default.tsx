import * as React from 'react'
import { DefaultCiceroonboardingcomponentProps } from './Default.types'
import * as styles from './styles.module.scss'

const baseClass = 'owlui-ciceroonboardingcomponent-default'

export const Component = (props: DefaultCiceroonboardingcomponentProps) => {
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

    return <div
        className={[
            modulePrefix + styles[baseClass],
            modulePrefix + styles[`${baseClass}_${theme}`],
            modulePrefix + styles[`${baseClass}_${theme}--${appearance}`],
            modulePrefix + styles[`${baseClass}--${size}`]
        ].join(' ')}
    >{children}</div>
}

export default {
    Component
};