import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsContentPasteProps } from './ContentPaste.types';

export const Component = (props: IconsContentPasteProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>content_paste</Default>;
};

export default {
  Component,
};
