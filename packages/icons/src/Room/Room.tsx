import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRoomProps } from './Room.types';

export const Component = (props: IconsRoomProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>room</Default>;
};

export default {
  Component,
};
