import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPublicProps } from './Public.types';

export const Component = (props: IconsPublicProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>public</Default>;
};

export default {
  Component,
};
