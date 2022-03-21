import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMicNoneProps } from './MicNone.types';

export const Component = (props: IconsMicNoneProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>mic_none</Default>;
};

export default {
  Component,
};
