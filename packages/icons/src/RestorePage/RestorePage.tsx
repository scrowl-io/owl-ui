import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRestorePageProps } from './RestorePage.types';

export const Component = (props: IconsRestorePageProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>restore_page</Default>;
};

export default {
  Component,
};
