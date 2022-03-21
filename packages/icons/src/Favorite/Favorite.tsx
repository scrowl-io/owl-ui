import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFavoriteProps } from './Favorite.types';

export const Component = (props: IconsFavoriteProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>favorite</Default>;
};

export default {
  Component,
};
