import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHotelProps } from './Hotel.types';

export const Component = (props: IconsHotelProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>hotel</Default>;
};

export default {
  Component,
};
