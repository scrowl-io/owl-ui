import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAssistantPhotoProps } from './AssistantPhoto.types';

export const Component = (props: IconsAssistantPhotoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>assistant_photo</Default>;
};

export default {
  Component,
};
