import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStrikethroughSProps } from './StrikethroughS.types';

export const Component = (props: IconsStrikethroughSProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>strikethrough_s</Default>;
};

export default {
  Component,
};
