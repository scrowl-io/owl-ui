import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLinkProps } from './Link.types';

export const Component = (props: IconsLinkProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>link</Default>;
};

export default {
  Component,
};
