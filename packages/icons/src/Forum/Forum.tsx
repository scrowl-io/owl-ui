import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsForumProps } from './Forum.types';

export const Component = (props: IconsForumProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>forum</Default>;
};

export default {
  Component,
};
