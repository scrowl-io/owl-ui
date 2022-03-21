import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAlbumProps } from './Album.types';

export const Component = (props: IconsAlbumProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>album</Default>;
};

export default {
  Component,
};
