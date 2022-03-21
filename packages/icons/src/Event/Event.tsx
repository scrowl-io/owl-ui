import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsEventProps } from './Event.types';

export const Component = (props: IconsEventProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>event</Default>;
};

export default {
  Component,
};
