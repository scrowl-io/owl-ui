import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTerrainProps } from './Terrain.types';

export const Component = (props: IconsTerrainProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>terrain</Default>;
};

export default {
  Component,
};
