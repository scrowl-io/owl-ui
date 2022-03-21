import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVideocamOffProps } from './VideocamOff.types';

export const Component = (props: IconsVideocamOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>videocam_off</Default>;
};

export default {
  Component,
};
