/* eslint-disable jsx-a11y/no-static-element-interactions */
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
  const [selectedItem, setSelectedItem] = React.useState<string>('');
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  dropdown ? (dropdown.selectedItem = selectedItem) : '';

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

  const toggleDropdown = () => {
    dropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true);
    const dropdown = document.querySelector('#dropdown-wrapper');
    dropdown?.classList.toggle('owlui-dropdown-menuwrapperHidden');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectItem = (e: { target: any }) => {
    const previouslySelected = document.querySelector(
      '.owlui-dropdown-menu-selectedMenuItem'
    );
    previouslySelected?.classList.remove(
      'owlui-dropdown-menu-selectedMenuItem'
    );
    const selectedItem = e.target;
    selectedItem.classList.add('owlui-dropdown-menu-selectedMenuItem');
    setSelectedItem(selectedItem.innerText);
  };

  const selectWithArrows = target => {
    const previouslySelected = document.querySelector(
      '.owlui-dropdown-menu-selectedMenuItem'
    );
    previouslySelected?.classList.remove(
      'owlui-dropdown-menu-selectedMenuItem'
    );
    const selectedItem = target;
    selectedItem.classList.add('owlui-dropdown-menu-selectedMenuItem');
    setSelectedItem(selectedItem.innerText);
  };

  const stripString = (string) => {
    const thenum = string.replace(/^\D+/g, '');
    return thenum;
  };

  const handleKeypress = e => {
    switch (e.code) {
      case 'Enter':
        selectItem(e);
        break;
      case 'Escape':
        toggleDropdown();
        break;
      case 'ArrowDown':
        if (e.target.id === 'select-button' && !dropdownOpen) {
          toggleDropdown();
          const firstLi = document.querySelector('#list-item-1');
          selectWithArrows(firstLi);
        } else if (dropdownOpen) {
          const currentlySelected = document.querySelector('.owlui-dropdown-menu-selectedMenuItem');
          const prevId = stripString(currentlySelected.id);
          const targetId = parseInt(prevId) + 1;
          const target = document.querySelector(`#list-item-${targetId}`);

          selectWithArrows(target);
        }
        break;
      case 'ArrowUp':
        console.log('up');
        break;
    }
  };

  const dropdownWrapperClass = `${baseClass}wrapperHidden`;

  return (
    <div {...locals}>
      <div onKeyDown={handleKeypress}>{dropdown && dropdown['label']}</div>
      <button id="select-button" onKeyDown={handleKeypress} onClick={toggleDropdown}>
        <span>{selectedItem ? selectedItem : 'Item 1'}</span>
        {/* <span className="icon">&#8595;</span> */}
      </button>
      <ul
        onKeyDown={handleKeypress}
        id="dropdown-wrapper"
        className={styleMod[dropdownWrapperClass]}
      >
        {dropdown &&
          dropdown.items.map((item: DropDownContentItemProps) => {
            return (
              <li
                id={`list-item-${item.id}`}
                onClick={selectItem}
                key={item.id}
                onKeyDown={handleKeypress}
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
