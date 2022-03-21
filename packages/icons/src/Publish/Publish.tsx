import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPublishProps } from './Publish.types';

export const Component = (props: IconsPublishProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>publish</Default>;
};

export default {
  Component,
};
