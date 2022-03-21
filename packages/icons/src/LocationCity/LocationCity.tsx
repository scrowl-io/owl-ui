import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocationCityProps } from './LocationCity.types';

export const Component = (props: IconsLocationCityProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>location_city</Default>;
};

export default {
  Component,
};
