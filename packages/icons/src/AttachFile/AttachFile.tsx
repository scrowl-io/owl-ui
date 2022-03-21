import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAttachFileProps } from './AttachFile.types';

export const Component = (props: IconsAttachFileProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>attach_file</Default>;
};

export default {
  Component,
};
