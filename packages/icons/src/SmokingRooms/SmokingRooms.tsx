import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSmokingRoomsProps } from './SmokingRooms.types';

export const Component = (props: IconsSmokingRoomsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>smoking_rooms</Default>;
};

export default {
  Component,
};
