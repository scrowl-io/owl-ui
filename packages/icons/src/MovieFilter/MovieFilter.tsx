import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMovieFilterProps } from './MovieFilter.types';

export const Component = (props: IconsMovieFilterProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>movie_filter</Default>;
};

export default {
  Component,
};
