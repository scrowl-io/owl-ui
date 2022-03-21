import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFileDownloadProps } from './FileDownload.types';

export const Component = (props: IconsFileDownloadProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>file_download</Default>;
};

export default {
  Component,
};
