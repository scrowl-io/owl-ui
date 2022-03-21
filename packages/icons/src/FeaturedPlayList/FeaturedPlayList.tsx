import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFeaturedPlayListProps } from './FeaturedPlayList.types';

export const Component = (props: IconsFeaturedPlayListProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>featured_play_list</Default>;
};

export default {
  Component,
};
