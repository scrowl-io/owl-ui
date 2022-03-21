import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsWebAssetProps } from './WebAsset.types';

export const Component = (props: IconsWebAssetProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>web_asset</Default>;
};

export default {
  Component,
};
