import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPlaceProps } from './Place.types';

export const Component = (props: IconsPlaceProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>place</Default>;
};

export default {
  Component,
};
