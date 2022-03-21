import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCloudUploadProps } from './CloudUpload.types';

export const Component = (props: IconsCloudUploadProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>cloud_upload</Default>;
};

export default {
  Component,
};
