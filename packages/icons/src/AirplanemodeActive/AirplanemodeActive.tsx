import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAirplanemodeActiveProps } from './AirplanemodeActive.types';

export const Component = (props: IconsAirplanemodeActiveProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>airplanemode_active</Default>;
};

export default {
  Component,
};
