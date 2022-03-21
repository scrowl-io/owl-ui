import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPagesProps } from './Pages.types';

export const Component = (props: IconsPagesProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>pages</Default>;
};

export default {
  Component,
};
