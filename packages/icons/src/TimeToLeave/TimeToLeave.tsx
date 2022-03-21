import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTimeToLeaveProps } from './TimeToLeave.types';

export const Component = (props: IconsTimeToLeaveProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>time_to_leave</Default>;
};

export default {
  Component,
};
