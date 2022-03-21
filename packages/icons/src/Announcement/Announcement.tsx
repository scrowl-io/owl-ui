import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAnnouncementProps } from './Announcement.types';

export const Component = (props: IconsAnnouncementProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>announcement</Default>;
};

export default {
  Component,
};
