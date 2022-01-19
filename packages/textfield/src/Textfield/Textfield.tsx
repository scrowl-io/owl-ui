import * as React from 'react';
import { TextfieldProps } from './Textfield.types';
import * as styles from './styles.module.scss';

export const Textfield = (props: TextfieldProps) => {
    const { children } = props;
    
    if (props.appearance === undefined) {
        props.appearance = 'primary'
    }

    if (props.size === undefined) {
        props.size = 'medium'
    }

    return <input type="text"
        className={[
            styles.default.textfield,
            styles.default[
                `textfield_${props.theme ? (props.appearance + '--' + props.theme) : props.appearance}`
            ],
            styles.default[`textfield--${props.size}`]
        ].join(' ')}
    />
}

export default Textfield;