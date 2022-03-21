import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatStrikethroughProps } from './FormatStrikethrough.types';

export const Component = (props: IconsFormatStrikethroughProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_strikethrough</Default>;
};

export default {
  Component,
};
