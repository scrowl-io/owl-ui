import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFirstPageProps } from './FirstPage.types';

export const Component = (props: IconsFirstPageProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>first_page</Default>;
};

export default {
  Component,
};
