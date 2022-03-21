import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsViewHeadlineProps } from './ViewHeadline.types';

export const Component = (props: IconsViewHeadlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>view_headline</Default>;
};

export default {
  Component,
};
