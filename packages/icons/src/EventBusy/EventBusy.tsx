import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsEventBusyProps } from './EventBusy.types';

export const Component = (props: IconsEventBusyProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>event_busy</Default>;
};

export default {
  Component,
};
