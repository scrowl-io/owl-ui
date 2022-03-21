import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsArchiveProps } from './Archive.types';

export const Component = (props: IconsArchiveProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>archive</Default>;
};

export default {
  Component,
};
