import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWatchProps } from './Watch.types';

export const Component = (props: IconsWatchProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>watch</Default>;
};

export default {
  Component,
};
