import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRadioProps } from './Radio.types';

export const Component = (props: IconsRadioProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>radio</Default>;
};

export default {
  Component,
};
