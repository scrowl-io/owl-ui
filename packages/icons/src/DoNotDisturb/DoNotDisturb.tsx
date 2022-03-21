import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDoNotDisturbProps } from './DoNotDisturb.types';

export const Component = (props: IconsDoNotDisturbProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>do_not_disturb</Default>;
};

export default {
  Component,
};
