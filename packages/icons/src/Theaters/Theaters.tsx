import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTheatersProps } from './Theaters.types';

export const Component = (props: IconsTheatersProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>theaters</Default>;
};

export default {
  Component,
};
