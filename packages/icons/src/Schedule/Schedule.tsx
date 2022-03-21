import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsScheduleProps } from './Schedule.types';

export const Component = (props: IconsScheduleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>schedule</Default>;
};

export default {
  Component,
};
