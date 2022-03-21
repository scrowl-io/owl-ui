import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsClosedCaptionProps } from './ClosedCaption.types';

export const Component = (props: IconsClosedCaptionProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>closed_caption</Default>;
};

export default {
  Component,
};
