import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFolderSpecialProps } from './FolderSpecial.types';

export const Component = (props: IconsFolderSpecialProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>folder_special</Default>;
};

export default {
  Component,
};
