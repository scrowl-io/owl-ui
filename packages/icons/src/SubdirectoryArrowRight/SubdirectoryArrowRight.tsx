import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSubdirectoryArrowRightProps } from './SubdirectoryArrowRight.types';

export const Component = (props: IconsSubdirectoryArrowRightProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>subdirectory_arrow_right</Default>;
};

export default {
  Component,
};
