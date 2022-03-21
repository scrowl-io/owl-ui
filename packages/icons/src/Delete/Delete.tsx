import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsDeleteProps } from './Delete.types';

export const Component = (props: IconsDeleteProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>delete</Default>;
};

export default {
  Component,
};
