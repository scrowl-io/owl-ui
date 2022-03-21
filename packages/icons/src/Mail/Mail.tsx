import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMailProps } from './Mail.types';

export const Component = (props: IconsMailProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>mail</Default>;
};

export default {
  Component,
};
