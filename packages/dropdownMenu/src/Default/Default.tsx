/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import {
  DropDownContentItemProps,
  DropdownMenuDefaultProps,
} from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: DropdownMenuDefaultProps) => {
  const baseClass = 'dropdownMenu';
  const { dropdown } = props;
  const prefix = props.prefix || '';

  console.log(props);

  const locals = createLocalProps(
    props,
    {
      module: styleMod,
      classes: {
        base: baseClass,
        prefix: prefix,
        optionals: [
          {
            fields: ['theme'],
            value: 'Theme',
          },
          {
            fields: ['theme', 'appearance'],
            value: 'Theme',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance', 'size']
  );

  const dropdownWrapperClass = `${baseClass}wrapperHidden`;
  const itemBaseClass = `${baseClass}dropdownMenuItem`;
  const selectedItemClass = `${baseClass}-selectedMenuItem`;

  const expandDropdown = () => {
    const dropdown = document.querySelector('#dropdown-wrapper');
    dropdown?.classList.toggle('owlui-dropdown-menuwrapperHidden');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectItem = (e: { target: any }) => {
    const selectedItem = e.target;
    selectedItem.classList.toggle(selectedItemClass);
    console.log(styleMod[itemBaseClass]);
  };

  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  const dropdownLabel = <div onClick={expandDropdown}>{dropdown['label']}</div>;
  // const renderItems = () => {
  //   dropDown.items.map((item: DropDownContentItemProps) => {
  //     return <div key={item.id}>{item.label}</div>;
  //   });
  // };

  return (
    <div {...locals}>
      {dropdownLabel}
      <ul id="dropdown-wrapper" className={styleMod[dropdownWrapperClass]}>
        {dropdown &&
          dropdown.items.map((item: DropDownContentItemProps) => {
            return (
              <li
                onClick={selectItem}
                className={styleMod[itemBaseClass]}
                key={item.id}
              >
                {item.label}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default {
  Component,
};
