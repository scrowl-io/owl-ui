import * as React from 'react';
import { TextfieldProps } from './Textfield.types';
import * as styles from './styles.module.scss';

export const Textfield = (props: TextfieldProps) => {
    const { children } = props;
    
    let appearance = props.appearance
    let size = props.size

    if (appearance === undefined) {
        appearance = 'primary'
    }

    if (size === undefined) {
        size = 'medium'
    }

    return <input type="text"
        className={[
            styles.default.textfield,
            styles.default[
                `textfield_${props.theme ? (appearance + '--' + props.theme) : appearance}`
            ],
            styles.default[`textfield--${size}`]
        ].join(' ')}
    />
}

export default {
    Textfield
};