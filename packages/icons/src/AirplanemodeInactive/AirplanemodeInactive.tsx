import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAirplanemodeInactiveProps } from './AirplanemodeInactive.types';

export const Component = (props: IconsAirplanemodeInactiveProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>airplanemode_inactive</Default>;
};

export default {
  Component,
};
