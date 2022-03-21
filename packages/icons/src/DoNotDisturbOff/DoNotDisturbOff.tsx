import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDoNotDisturbOffProps } from './DoNotDisturbOff.types';

export const Component = (props: IconsDoNotDisturbOffProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>do_not_disturb_off</Default>;
};

export default {
  Component,
};
