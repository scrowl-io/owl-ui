import * as React from 'react';
import { DefaultTextfieldProps } from './Default.types';
import * as styles from './styles.module.scss';

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
            styles.default.textfield,
            styles.default[`textfield_${appearance}`],
            styles.default[`textfield_${theme}`],
            styles.default[`textfield--${size}`]
        ].join(' ')}
    />
}

export default {
    Component
};