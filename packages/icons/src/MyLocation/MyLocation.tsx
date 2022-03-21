import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMyLocationProps } from './MyLocation.types';

export const Component = (props: IconsMyLocationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>my_location</Default>;
};

export default {
  Component,
};
