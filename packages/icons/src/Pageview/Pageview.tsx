import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPageviewProps } from './Pageview.types';

export const Component = (props: IconsPageviewProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>pageview</Default>;
};

export default {
  Component,
};
