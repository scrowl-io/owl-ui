import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRssFeedProps } from './RssFeed.types';

export const Component = (props: IconsRssFeedProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>rss_feed</Default>;
};

export default {
  Component,
};
