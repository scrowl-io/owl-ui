import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFastRewindProps } from './FastRewind.types';

export const Component = (props: IconsFastRewindProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>fast_rewind</Default>;
};

export default {
  Component,
};
