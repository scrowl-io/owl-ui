import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRepeatProps } from './Repeat.types';

export const Component = (props: IconsRepeatProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>repeat</Default>;
};

export default {
  Component,
};
