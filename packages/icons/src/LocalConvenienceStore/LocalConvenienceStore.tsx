import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalConvenienceStoreProps } from './LocalConvenienceStore.types';

export const Component = (props: IconsLocalConvenienceStoreProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_convenience_store</Default>;
};

export default {
  Component,
};
