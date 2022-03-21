import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNearMeProps } from './NearMe.types';

export const Component = (props: IconsNearMeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>near_me</Default>;
};

export default {
  Component,
};
