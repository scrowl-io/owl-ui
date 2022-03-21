import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsOpenInBrowserProps } from './OpenInBrowser.types';

export const Component = (props: IconsOpenInBrowserProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>open_in_browser</Default>;
};

export default {
  Component,
};
