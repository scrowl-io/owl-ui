import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVideocamProps } from './Videocam.types';

export const Component = (props: IconsVideocamProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>videocam</Default>;
};

export default {
  Component,
};
