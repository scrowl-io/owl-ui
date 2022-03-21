import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPanoramaFishEyeProps } from './PanoramaFishEye.types';

export const Component = (props: IconsPanoramaFishEyeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>panorama_fish_eye</Default>;
};

export default {
  Component,
};
