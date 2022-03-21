import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSdStorageProps } from './SdStorage.types';

export const Component = (props: IconsSdStorageProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>sd_storage</Default>;
};

export default {
  Component,
};
