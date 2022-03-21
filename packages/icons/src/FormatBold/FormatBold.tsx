import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatBoldProps } from './FormatBold.types';

export const Component = (props: IconsFormatBoldProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_bold</Default>;
};

export default {
  Component,
};
