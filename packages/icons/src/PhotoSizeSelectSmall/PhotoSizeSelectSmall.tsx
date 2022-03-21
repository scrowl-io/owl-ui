import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhotoSizeSelectSmallProps } from './PhotoSizeSelectSmall.types';

export const Component = (props: IconsPhotoSizeSelectSmallProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>photo_size_select_small</Default>;
};

export default {
  Component,
};
