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

  return <button
        className={[
            styles.default.textfield,
            styles.default[`textfield_${props.appearance}`],
            styles.default[`textfield--${props.size}`]
        ].join(' ')}
    >{children}</button>
}

export default Textfield;