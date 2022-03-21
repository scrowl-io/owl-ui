import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalParkingProps } from './LocalParking.types';

export const Component = (props: IconsLocalParkingProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_parking</Default>;
};

export default {
  Component,
};
