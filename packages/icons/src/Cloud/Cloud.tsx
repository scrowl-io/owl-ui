import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCloudProps } from './Cloud.types';

export const Component = (props: IconsCloudProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>cloud</Default>;
};

export default {
  Component,
};
