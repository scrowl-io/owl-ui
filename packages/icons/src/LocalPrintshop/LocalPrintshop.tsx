import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalPrintshopProps } from './LocalPrintshop.types';

export const Component = (props: IconsLocalPrintshopProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_printshop</Default>;
};

export default {
  Component,
};
