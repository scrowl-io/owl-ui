import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGamepadProps } from './Gamepad.types';

export const Component = (props: IconsGamepadProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>gamepad</Default>;
};

export default {
  Component,
};
