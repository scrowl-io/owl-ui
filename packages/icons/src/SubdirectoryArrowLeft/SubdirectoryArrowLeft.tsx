import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSubdirectoryArrowLeftProps } from './SubdirectoryArrowLeft.types';

export const Component = (props: IconsSubdirectoryArrowLeftProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>subdirectory_arrow_left</Default>;
};

export default {
  Component,
};
