import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDeleteSweepProps } from './DeleteSweep.types';

export const Component = (props: IconsDeleteSweepProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>delete_sweep</Default>;
};

export default {
  Component,
};
