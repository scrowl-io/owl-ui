import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsContentCopyProps } from './ContentCopy.types';

export const Component = (props: IconsContentCopyProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>content_copy</Default>;
};

export default {
  Component,
};
