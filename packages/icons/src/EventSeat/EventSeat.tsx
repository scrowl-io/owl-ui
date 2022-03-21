import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsEventSeatProps } from './EventSeat.types';

export const Component = (props: IconsEventSeatProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>event_seat</Default>;
};

export default {
  Component,
};
