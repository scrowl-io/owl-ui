import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCollectionsProps } from './Collections.types';

export const Component = (props: IconsCollectionsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>collections</Default>;
};

export default {
  Component,
};
