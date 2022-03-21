import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLastPageProps } from './LastPage.types';

export const Component = (props: IconsLastPageProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>last_page</Default>;
};

export default {
  Component,
};
