import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSubtitlesProps } from './Subtitles.types';

export const Component = (props: IconsSubtitlesProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>subtitles</Default>;
};

export default {
  Component,
};
