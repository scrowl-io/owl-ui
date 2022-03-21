import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPictureAsPdfProps } from './PictureAsPdf.types';

export const Component = (props: IconsPictureAsPdfProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>picture_as_pdf</Default>;
};

export default {
  Component,
};
