import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocationSearchingProps } from './LocationSearching.types';

export const Component = (props: IconsLocationSearchingProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>location_searching</Default>;
};

export default {
  Component,
};
