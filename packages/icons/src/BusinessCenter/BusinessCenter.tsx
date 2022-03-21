import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBusinessCenterProps } from './BusinessCenter.types';

export const Component = (props: IconsBusinessCenterProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>business_center</Default>;
};

export default {
  Component,
};
