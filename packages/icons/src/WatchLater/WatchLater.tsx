import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWatchLaterProps } from './WatchLater.types';

export const Component = (props: IconsWatchLaterProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>watch_later</Default>;
};

export default {
  Component,
};
