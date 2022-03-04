import * as React from 'react';
import { DefaultTextfieldProps } from './Default.types';
import * as styles from './styles.module.scss';

const baseClass = 'owluiTextfieldDefault'

export const Component = (props: DefaultTextfieldProps) => {
    const { children } = props;
    
    let theme = props.theme
    let appearance = props.appearance
    let size = props.size
    let modulePrefix = props.prefix

    if (props.prefix === undefined) {
        modulePrefix = ''
    }

    if (theme === undefined) {
        theme = 'Default'
    }

    if (appearance === undefined) {
        appearance = 'Primary'
    }

    if (size === undefined) {
        size = 'Medium'
    }

    return <input type="text"
        className={[
            modulePrefix + styles[baseClass],
            modulePrefix + styles[`${baseClass}${theme}`],
            modulePrefix + styles[`${baseClass}${theme}${appearance}`],
            modulePrefix + styles[`${baseClass}${size}`]
        ].join(' ')}
    />
}

export default {
    Component
};