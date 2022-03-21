import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalHotelProps } from './LocalHotel.types';

export const Component = (props: IconsLocalHotelProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_hotel</Default>;
};

export default {
  Component,
};
