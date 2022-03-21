import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsArrowBackProps } from './ArrowBack.types';

export const Component = (props: IconsArrowBackProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>arrow_back</Default>;
};

export default {
  Component,
};
