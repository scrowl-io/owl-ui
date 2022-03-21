import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCloudDownloadProps } from './CloudDownload.types';

export const Component = (props: IconsCloudDownloadProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>cloud_download</Default>;
};

export default {
  Component,
};
