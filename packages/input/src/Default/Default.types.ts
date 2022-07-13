import * as bs from 'react-bootstrap';

export interface InputProps {
  id: string;
  type: string;
  label: string;
  optionalprops?: {
    disabled: boolean;
    readOnly: boolean;
    plaintext: boolean;
    placeholder: string;
  };
}

export interface InputDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  inputProps: InputProps;
}

export type InputDefaultProps = InputDefaultCommons & bs.FormProps;
