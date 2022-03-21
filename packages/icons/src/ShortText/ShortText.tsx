import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsShortTextProps } from './ShortText.types';

export const Component = (props: IconsShortTextProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>short_text</Default>;
};

export default {
  Component,
};
