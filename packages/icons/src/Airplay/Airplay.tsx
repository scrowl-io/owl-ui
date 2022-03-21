import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAirplayProps } from './Airplay.types';

export const Component = (props: IconsAirplayProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>airplay</Default>;
};

export default {
  Component,
};
