import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsTextFormatProps } from './TextFormat.types';

export const Component = (props: IconsTextFormatProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>text_format</Default>;
};

export default {
  Component,
};
