import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSkipPreviousProps } from './SkipPrevious.types';

export const Component = (props: IconsSkipPreviousProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>skip_previous</Default>;
};

export default {
  Component,
};
