import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPanoramaProps } from './Panorama.types';

export const Component = (props: IconsPanoramaProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>panorama</Default>;
};

export default {
  Component,
};
