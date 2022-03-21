import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalMoviesProps } from './LocalMovies.types';

export const Component = (props: IconsLocalMoviesProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_movies</Default>;
};

export default {
  Component,
};
