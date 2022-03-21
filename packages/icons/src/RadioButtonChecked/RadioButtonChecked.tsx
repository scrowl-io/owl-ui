import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRadioButtonCheckedProps } from './RadioButtonChecked.types';

export const Component = (props: IconsRadioButtonCheckedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>radio_button_checked</Default>;
};

export default {
  Component,
};
