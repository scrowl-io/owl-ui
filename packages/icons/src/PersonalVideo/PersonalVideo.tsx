import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPersonalVideoProps } from './PersonalVideo.types';

export const Component = (props: IconsPersonalVideoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>personal_video</Default>;
};

export default {
  Component,
};
