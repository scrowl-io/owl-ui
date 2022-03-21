import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMicOffProps } from './MicOff.types';

export const Component = (props: IconsMicOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>mic_off</Default>;
};

export default {
  Component,
};
