import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsInsertPhotoProps } from './InsertPhoto.types';

export const Component = (props: IconsInsertPhotoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>insert_photo</Default>;
};

export default {
  Component,
};
