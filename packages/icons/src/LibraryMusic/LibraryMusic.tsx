import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLibraryMusicProps } from './LibraryMusic.types';

export const Component = (props: IconsLibraryMusicProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>library_music</Default>;
};

export default {
  Component,
};
