import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFormatQuoteProps } from './FormatQuote.types';

export const Component = (props: IconsFormatQuoteProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>format_quote</Default>;
};

export default {
  Component,
};
