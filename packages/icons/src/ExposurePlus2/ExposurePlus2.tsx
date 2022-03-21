import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsExposurePlus2Props } from './ExposurePlus2.types';

export const Component = (props: IconsExposurePlus2Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>exposure_plus_2</Default>;
};

export default {
  Component,
};
