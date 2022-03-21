import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsOndemandVideoProps } from './OndemandVideo.types';

export const Component = (props: IconsOndemandVideoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>ondemand_video</Default>;
};

export default {
  Component,
};
