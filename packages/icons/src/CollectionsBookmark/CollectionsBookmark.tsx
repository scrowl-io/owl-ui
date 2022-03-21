import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCollectionsBookmarkProps } from './CollectionsBookmark.types';

export const Component = (props: IconsCollectionsBookmarkProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>collections_bookmark</Default>;
};

export default {
  Component,
};
