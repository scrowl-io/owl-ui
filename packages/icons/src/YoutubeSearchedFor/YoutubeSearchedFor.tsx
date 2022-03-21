import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsYoutubeSearchedForProps } from './YoutubeSearchedFor.types';

export const Component = (props: IconsYoutubeSearchedForProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>youtube_searched_for</Default>;
};

export default {
  Component,
};
