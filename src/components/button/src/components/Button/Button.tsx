import * as React from 'react';
import { ButtonProps } from './Button.types';
import * as styles from './styles.module.scss'

export const Button = ({
    appearance,
    size,
    label
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={[
                styles.button,
                styles.button + '_' + appearance,
                styles.button + '--' + size
            ].join(' ')}
        >
            {label}
        </button>
    )
}