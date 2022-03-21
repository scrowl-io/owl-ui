import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPhotoProps } from './Photo.types';

export const Component = (props: IconsPhotoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>photo</Default>;
};

export default {
  Component,
};
