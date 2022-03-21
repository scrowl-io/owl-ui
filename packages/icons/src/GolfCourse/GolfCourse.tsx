import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGolfCourseProps } from './GolfCourse.types';

export const Component = (props: IconsGolfCourseProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>golf_course</Default>;
};

export default {
  Component,
};
