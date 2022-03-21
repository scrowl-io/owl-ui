import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFindInPageProps } from './FindInPage.types';

export const Component = (props: IconsFindInPageProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>find_in_page</Default>;
};

export default {
  Component,
};
