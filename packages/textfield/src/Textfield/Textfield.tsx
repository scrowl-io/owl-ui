import * as React from 'react';
import { TextfieldProps } from './Textfield.types';
import styles from './styles.scss';

export const Textfield = (props: TextfieldProps) => {
  const { children } = props;

  return <input className={[
            styles.button,
            styles[`textfield_${props.appearance}`],
            styles[`textfield--${props.size}`]
        ].join(' ')} />;
}

export default Textfield;