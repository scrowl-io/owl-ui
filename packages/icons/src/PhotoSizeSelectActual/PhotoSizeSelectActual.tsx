import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhotoSizeSelectActualProps } from './PhotoSizeSelectActual.types';

export const Component = (props: IconsPhotoSizeSelectActualProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>photo_size_select_actual</Default>;
};

export default {
  Component,
};
