import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhotoFilterProps } from './PhotoFilter.types';

export const Component = (props: IconsPhotoFilterProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>photo_filter</Default>;
};

export default {
  Component,
};
