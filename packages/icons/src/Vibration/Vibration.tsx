import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVibrationProps } from './Vibration.types';

export const Component = (props: IconsVibrationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>vibration</Default>;
};

export default {
  Component,
};
