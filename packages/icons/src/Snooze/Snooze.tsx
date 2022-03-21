import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSnoozeProps } from './Snooze.types';

export const Component = (props: IconsSnoozeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>snooze</Default>;
};

export default {
  Component,
};
