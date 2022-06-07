import React, { useState } from 'react';
import { DropdownDefaultProps, DropDownItemProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';
import { Dropdown, ThemeProvider } from 'react-bootstrap';

export const Component = (props: DropdownDefaultProps) => {
  const baseClass = 'dropdown';
  const prefix = props.prefix || '';
  const { dropdown } = props;
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);

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
    ['prefix', 'theme', 'size', 'dropdown']
  );

  const handleItemClick = (event: React.MouseEvent<HTMLElement>) => {
    setSelectedItem(parseInt(event.currentTarget.dataset.index as string) - 1);
  };

  const handleTab = (
    event: React.KeyboardEvent<
      HTMLAnchorElement | HTMLButtonElement | HTMLLIElement | HTMLDivElement
    >
  ) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setSelectedItem(
        parseInt(event.currentTarget.dataset.index as string) - 1
      );
      setShow(!show);
    }
  };

  const toggleShow = () => {
    setShow(!show);
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
        <div className={styleMod.dropdownContainer}>
          <h2>{dropdown?.label}</h2>
          <Dropdown
            onToggle={toggleShow}
            show={show}
            {...locals}
            focusFirstItemOnShow="keyboard"
          >
            <Dropdown.Toggle variant={props.variant} id="dropdown-basic">
              {selectedItem
                ? dropdown.items[selectedItem].label
                : dropdown.items[0].label}
            </Dropdown.Toggle>
            <Dropdown.Menu
              className={`${styleMod.dropdownList} dropdown-item ${
                show ? 'owlui-show' : ''
              }`}
            >
              {dropdown.items.map((item: DropDownItemProps) => {
                return (
                  <Dropdown.Item
                    id={`item-number-${item.id}`}
                    onKeyDown={handleTab}
                    className={`${
                      selectedItem === item.id - 1 ? 'owlui-active' : ''
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
          <h4>
            {selectedItem
              ? `Item ${selectedItem + 1} is currently selected`
              : 'Please select an item'}
          </h4>
        </div>
      </ThemeProvider>
    </>
  );
};

export default {
  Component,
};
