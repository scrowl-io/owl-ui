import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsNewReleasesProps } from './NewReleases.types';

export const Component = (props: IconsNewReleasesProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>new_releases</Default>;
};

export default {
  Component,
};
