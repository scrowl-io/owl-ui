import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFileUploadProps } from './FileUpload.types';

export const Component = (props: IconsFileUploadProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>file_upload</Default>;
};

export default {
  Component,
};
