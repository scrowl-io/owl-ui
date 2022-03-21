import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPictureInPictureProps } from './PictureInPicture.types';

export const Component = (props: IconsPictureInPictureProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>picture_in_picture</Default>;
};

export default {
  Component,
};
