import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLocalPostOfficeProps } from './LocalPostOffice.types';

export const Component = (props: IconsLocalPostOfficeProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>local_post_office</Default>;
};

export default {
  Component,
};
