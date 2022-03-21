import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFindReplaceProps } from './FindReplace.types';

export const Component = (props: IconsFindReplaceProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>find_replace</Default>;
};

export default {
  Component,
};
