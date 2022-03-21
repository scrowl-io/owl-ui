import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSkipNextProps } from './SkipNext.types';

export const Component = (props: IconsSkipNextProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>skip_next</Default>;
};

export default {
  Component,
};
