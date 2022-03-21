import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsEventAvailableProps } from './EventAvailable.types';

export const Component = (props: IconsEventAvailableProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>event_available</Default>;
};

export default {
  Component,
};
