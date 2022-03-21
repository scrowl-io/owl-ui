import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFontDownloadProps } from './FontDownload.types';

export const Component = (props: IconsFontDownloadProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>font_download</Default>;
};

export default {
  Component,
};
