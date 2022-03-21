import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPictureInPictureAltProps } from './PictureInPictureAlt.types';

export const Component = (props: IconsPictureInPictureAltProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>picture_in_picture_alt</Default>;
};

export default {
  Component,
};
