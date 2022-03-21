import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsViewColumnProps } from './ViewColumn.types';

export const Component = (props: IconsViewColumnProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>view_column</Default>;
};

export default {
  Component,
};
