import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCallMissedProps } from './CallMissed.types';

export const Component = (props: IconsCallMissedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>call_missed</Default>;
};

export default {
  Component,
};
