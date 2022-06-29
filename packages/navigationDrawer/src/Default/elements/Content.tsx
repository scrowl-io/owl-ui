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

const createItem = (item: NavigationDrawerContentItemProps, key: number) => {
  return <NavItem key={key} label={item.label} url={item.url} />;
};

const createGroup = (
  item: NavigationDrawerContentItemGroupProps,
  key: number
) => {
  const subheadingClass = `${baseClass}Subheader`;
  const groupClass = `${baseClass}Group`;
  const content = formatItems(item.items);
  return (
    <div key={key} className={styles[groupClass]}>
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
  const elements: React.ReactChild[] = [];

  items.forEach((item, index) => {
    const [checkedRes, checkedItem] = isItemGroup(item);

    if (checkedRes) {
      elements.push(createGroup(checkedItem, index));
    } else {
      elements.push(createItem(checkedItem, index));
    }
  });

  return elements;
};

export const Component = (props: NavigationDrawerElementProps) => {
  const { items } = props;
  let content: React.ReactNode = [];

  if (items && items.length) content = formatItems(items);

  return <nav className={styles[baseClass]}>{content}</nav>;
};

export default {
  Component,
};
