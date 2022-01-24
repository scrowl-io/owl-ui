import * as React from 'react';
import { DefaultTextfieldProps } from './Default.types';
import * as styles from './styles.module.scss';

const baseClass = 'owlui-textfield-default'

export const Component = (props: DefaultTextfieldProps) => {
    const { children } = props;
    
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

    if (props.modulePrefix === undefined) {
        modulePrefix = ''
    }

    return <input type="text"
        className={[
            modulePrefix + styles.default[baseClass],
            modulePrefix + styles.default[`${baseClass}_${appearance}`],
            modulePrefix + styles.default[`${baseClass}_${theme}`],
            modulePrefix + styles.default[`${baseClass}--${size}`]
        ].join(' ')}
    />
}

export default {
    Component
};