import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGamesProps } from './Games.types';

export const Component = (props: IconsGamesProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>games</Default>;
};

export default {
  Component,
};
