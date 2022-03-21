import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBrandingWatermarkProps } from './BrandingWatermark.types';

export const Component = (props: IconsBrandingWatermarkProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>branding_watermark</Default>;
};

export default {
  Component,
};
