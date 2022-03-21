import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRoomServiceProps } from './RoomService.types';

export const Component = (props: IconsRoomServiceProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>room_service</Default>;
};

export default {
  Component,
};
