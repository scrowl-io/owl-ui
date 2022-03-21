import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAddToPhotosProps } from './AddToPhotos.types';

export const Component = (props: IconsAddToPhotosProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>add_to_photos</Default>;
};

export default {
  Component,
};
