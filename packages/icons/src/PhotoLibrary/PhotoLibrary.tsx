import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhotoLibraryProps } from './PhotoLibrary.types';

export const Component = (props: IconsPhotoLibraryProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>photo_library</Default>;
};

export default {
  Component,
};
