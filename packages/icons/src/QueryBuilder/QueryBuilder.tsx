import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsQueryBuilderProps } from './QueryBuilder.types';

export const Component = (props: IconsQueryBuilderProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>query_builder</Default>;
};

export default {
  Component,
};
