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
        size = 'Md'
    }

    return <input type="text"
        className={[
            modulePrefix + styles[baseClass],
            modulePrefix + styles[`${baseClass}Theme${theme}`],
            modulePrefix + styles[`${baseClass}Theme${theme}${appearance}`],
            modulePrefix + styles[`${baseClass}Size${size}`]
        ].join(' ')}
    />
}

export default {
    Component
};