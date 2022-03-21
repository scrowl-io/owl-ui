import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFavoriteBorderProps } from './FavoriteBorder.types';

export const Component = (props: IconsFavoriteBorderProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>favorite_border</Default>;
};

export default {
  Component,
};
