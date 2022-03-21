import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsExposurePlus1Props } from './ExposurePlus1.types';

export const Component = (props: IconsExposurePlus1Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>exposure_plus_1</Default>;
};

export default {
  Component,
};
