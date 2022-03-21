import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsVideoLibraryProps } from './VideoLibrary.types';

export const Component = (props: IconsVideoLibraryProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>video_library</Default>;
};

export default {
  Component,
};
