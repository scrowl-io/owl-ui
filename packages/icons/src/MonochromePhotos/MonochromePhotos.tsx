import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsMonochromePhotosProps } from './MonochromePhotos.types';

export const Component = (props: IconsMonochromePhotosProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>monochrome_photos</Default>;
};

export default {
  Component,
};
