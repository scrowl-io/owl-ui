import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsStorageProps } from './Storage.types';

export const Component = (props: IconsStorageProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>storage</Default>;
};

export default {
  Component,
};
