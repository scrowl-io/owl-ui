import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRecentActorsProps } from './RecentActors.types';

export const Component = (props: IconsRecentActorsProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>recent_actors</Default>;
};

export default {
  Component,
};
