import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAddAPhotoProps } from './AddAPhoto.types';

export const Component = (props: IconsAddAPhotoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>add_a_photo</Default>;
};

export default {
  Component,
};
