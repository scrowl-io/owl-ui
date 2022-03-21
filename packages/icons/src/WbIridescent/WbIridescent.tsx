import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWbIridescentProps } from './WbIridescent.types';

export const Component = (props: IconsWbIridescentProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>wb_iridescent</Default>;
};

export default {
  Component,
};
