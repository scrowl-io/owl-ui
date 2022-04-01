import * as React from 'react';
import {
  NavigationDrawerContentItemProps,
  NavigationDrawerContentItemGroupProps,
  NavigationDrawerContentTypes,
  NavigationDrawerElementProps,
} from '../Default.types';
import * as styles from '../styles.module.scss';
import { Component as NavItem } from './Item';

const baseClass = 'owluiNavigationDrawerContent';

const createItem = (item: NavigationDrawerContentItemProps) => {
  return <NavItem label={item.label} />;
};

const createGroup = (item: NavigationDrawerContentItemGroupProps) => {
  const subheadingClass = `${baseClass}Subheader`;
  const groupClass = `${baseClass}Group`;
  const content = formatItems(item.items);
  return (
    <div className={styles[groupClass]}>
      <h6 className={styles[subheadingClass]}>{item.heading}</h6>
      {content}
    </div>
  );
};

const isItemGroup = (
  item: NavigationDrawerContentTypes
):
  | [true, NavigationDrawerContentItemGroupProps]
  | [false, NavigationDrawerContentItemProps] => {
  if ('heading' in item) {
    return [true, item];
  } else {
    return [false, item];
  }
};

const formatItems = (items: Array<NavigationDrawerContentTypes>) => {
  const elements: JSX.Element[] = [];

  items.forEach(item => {
    const [checkedRes, checkedItem] = isItemGroup(item);

    if (checkedRes) {
      elements.push(createGroup(checkedItem));
    } else {
      elements.push(createItem(checkedItem));
    }
  });

  return elements;
};

export const Component = (props: NavigationDrawerElementProps) => {
  let { items } = props;
  items = items || [];

  const content = formatItems(items);

  return <nav className={styles[baseClass]}>{content}</nav>;
};

export default {
  Component,
};
