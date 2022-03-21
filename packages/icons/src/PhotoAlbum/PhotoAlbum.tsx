import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhotoAlbumProps } from './PhotoAlbum.types';

export const Component = (props: IconsPhotoAlbumProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>photo_album</Default>;
};

export default {
  Component,
};
