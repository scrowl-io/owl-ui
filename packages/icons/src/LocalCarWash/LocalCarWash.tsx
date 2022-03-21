import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalCarWashProps } from './LocalCarWash.types';

export const Component = (props: IconsLocalCarWashProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_car_wash</Default>;
};

export default {
  Component,
};
