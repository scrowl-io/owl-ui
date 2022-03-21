import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhotoSizeSelectLargeProps } from './PhotoSizeSelectLarge.types';

export const Component = (props: IconsPhotoSizeSelectLargeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>photo_size_select_large</Default>;
};

export default {
  Component,
};
