import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBookmarkProps } from './Bookmark.types';

export const Component = (props: IconsBookmarkProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>bookmark</Default>;
};

export default {
  Component,
};
