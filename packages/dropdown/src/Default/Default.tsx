import React, { useState } from 'react';
import { DropdownDefaultProps, DropdownItemProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';
import { Dropdown, ThemeProvider } from 'react-bootstrap';

export const Component = (props: DropdownDefaultProps) => {
  const baseClass = 'dropdown';
  const prefix = props.prefix || '';
  const { items } = props;
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    items[0].id
  );

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
            value: 'theme',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'size', 'items']
  );

  const handleItemClick = (event: React.MouseEvent<HTMLElement>) => {
    setSelectedItem(event.currentTarget.dataset.index);
  };

  const handleTab = (
    event: React.KeyboardEvent<
      HTMLAnchorElement | HTMLButtonElement | HTMLLIElement | HTMLDivElement
    >
  ) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setSelectedItem(event.currentTarget.dataset.index);
      setShow(!show);
    }
  };

  return (
    <>
      <ThemeProvider
        prefixes={{
          dropdown: 'owlui-dropdown',
          btn: 'owlui-btn',
          'dropdown-toggle': 'owlui-dropdown-toggle',
          'dropdown-menu': 'owlui-dropdown-menu',
          'dropdown-item': 'owlui-dropdown-item',
        }}
      >
        <Dropdown
          onToggle={() => setShow(!show)}
          show={show}
          {...locals}
          focusFirstItemOnShow="keyboard"
        >
          <Dropdown.Toggle variant={props.variant}>
            {selectedItem
              ? items.find(v => v.id == selectedItem)?.label
              : items[0].label}
          </Dropdown.Toggle>
          <Dropdown.Menu
            className={`${styleMod.dropdownList} ${show ? 'owlui-show' : ''}`}
          >
            {items.map((item: DropdownItemProps) => {
              return (
                <Dropdown.Item
                  id={`item-number-${item.id}`}
                  value={item.value}
                  onKeyDown={handleTab}
                  className={`${
                    selectedItem === item.id ? 'owlui-active' : ''
                  }`}
                  data-index={item.id}
                  key={item.id}
                  onClick={handleItemClick}
                >
                  {item.label}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </ThemeProvider>
    </>
  );
};

export default {
  Component,
};
