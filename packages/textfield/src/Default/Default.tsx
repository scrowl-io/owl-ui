import * as React from 'react';
import { DefaultTextfieldProps } from './Default.types';
import * as styles from './styles.module.scss';

const baseClass = 'owlui-textfield-default'

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
        theme = 'default'
    }

    if (appearance === undefined) {
        appearance = 'primary'
    }

    if (size === undefined) {
        size = 'medium'
    }

    return <input type="text"
        className={[
            modulePrefix + styles.default[baseClass],
            modulePrefix + styles.default[`${baseClass}_${theme}`],
            modulePrefix + styles.default[`${baseClass}_${theme}--${appearance}`],
            modulePrefix + styles.default[`${baseClass}--${size}`]
        ].join(' ')}
    />
}

export default {
    Component
};