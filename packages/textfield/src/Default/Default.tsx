import * as React from 'react';
import { DefaultTextfieldProps } from './Default.types';
import * as styles from './styles.module.scss';

const baseClass = 'owlui-textfield-default'

export const Component = (props: DefaultTextfieldProps) => {
    const { children } = props;
    
    let appearance = props.appearance
    let theme = props.theme
    let size = props.size

    if (appearance === undefined) {
        appearance = 'primary'
    }

    if (theme === undefined) {
        theme = 'default'
    }

    if (size === undefined) {
        size = 'medium'
    }

    return <input type="text"
        className={[
            styles.default[baseClass],
            styles.default[`${baseClass}_${appearance}`],
            styles.default[`${baseClass}_${theme}`],
            styles.default[`${baseClass}--${size}`]
        ].join(' ')}
    />
}

export default {
    Component
};