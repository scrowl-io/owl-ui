import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocationDisabledProps } from './LocationDisabled.types';

export const Component = (props: IconsLocationDisabledProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>location_disabled</Default>;
};

export default {
  Component,
};
