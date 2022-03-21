import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRadioButtonUncheckedProps } from './RadioButtonUnchecked.types';

export const Component = (props: IconsRadioButtonUncheckedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>radio_button_unchecked</Default>;
};

export default {
  Component,
};
