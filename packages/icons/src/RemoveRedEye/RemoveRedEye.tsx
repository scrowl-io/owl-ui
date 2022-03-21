import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRemoveRedEyeProps } from './RemoveRedEye.types';

export const Component = (props: IconsRemoveRedEyeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>remove_red_eye</Default>;
};

export default {
  Component,
};
