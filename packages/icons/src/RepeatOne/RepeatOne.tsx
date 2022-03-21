import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRepeatOneProps } from './RepeatOne.types';

export const Component = (props: IconsRepeatOneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>repeat_one</Default>;
};

export default {
  Component,
};
