import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMovieProps } from './Movie.types';

export const Component = (props: IconsMovieProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>movie</Default>;
};

export default {
  Component,
};
