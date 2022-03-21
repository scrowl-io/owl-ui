import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBookmarkBorderProps } from './BookmarkBorder.types';

export const Component = (props: IconsBookmarkBorderProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>bookmark_border</Default>;
};

export default {
  Component,
};
