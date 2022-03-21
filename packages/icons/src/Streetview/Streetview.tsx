import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStreetviewProps } from './Streetview.types';

export const Component = (props: IconsStreetviewProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>streetview</Default>;
};

export default {
  Component,
};
