import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMovieCreationProps } from './MovieCreation.types';

export const Component = (props: IconsMovieCreationProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>movie_creation</Default>;
};

export default {
  Component,
};
