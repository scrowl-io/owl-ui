import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVideogameAssetProps } from './VideogameAsset.types';

export const Component = (props: IconsVideogameAssetProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>videogame_asset</Default>;
};

export default {
  Component,
};
