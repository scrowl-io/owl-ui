import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDirectionsBikeProps } from './DirectionsBike.types';

export const Component = (props: IconsDirectionsBikeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>directions_bike</Default>;
};

export default {
  Component,
};
