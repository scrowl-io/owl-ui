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

  // dropdown ? (dropdown.selectedItem = selectedItem) : '';

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

  const toggleDropdown = (e) => {
    if (dropdownOpen) {
      setDropdownOpen(false);
    } else if (e && e.type === 'click') {
      setDropdownOpen(true);
    } else {
      setDropdownOpen(true);
      const firstLi = document.querySelector('#list-item-1');
      selectWithArrows(firstLi);
    }
    const dropdown = document.querySelector('#dropdown-wrapper');
    dropdown?.classList.toggle('owlui-dropdown-menuwrapperHidden');
    if (selectedItem) {
      console.log(selectedItem);
      const idNum = stripString(selectedItem);
      const targetLi = document.querySelector(`#list-item-${idNum}`);
      targetLi?.classList.add('owlui-dropdown-menu-selectedMenuItem');
      selectWithArrows(targetLi);
    }
  };

  const selectItem = (e) => {
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

  const selectWithArrows = (target: HTMLElement | null) => {
    const previouslySelected = document.querySelector(
      '.owlui-dropdown-menu-selectedMenuItem'
    );
    previouslySelected?.classList.remove(
      'owlui-dropdown-menu-selectedMenuItem'
    );
    if (target) {
      const selectedItem = target;
      selectedItem.classList.add('owlui-dropdown-menu-selectedMenuItem');
      selectedItem.scrollIntoView(false);
      setSelectedItem(selectedItem.innerText);
    } else if (selectedItem) {
      const idNum = stripString(selectedItem);
      const targetLi = document.querySelector(`#list-item-${idNum}`);
      targetLi?.classList.add('owlui-dropdown-menu-selectedMenuItem');
    } else {
      const firstLi = document.querySelector('#list-item-1');
      firstLi?.classList.add('owlui-dropdown-menu-selectedMenuItem');
      firstLi?.scrollIntoView(false);
      setSelectedItem(firstLi?.innerText);
    }
  };

  const stripString = (string: string) => {
    const idNum = string.replace(/^\D+/g, '');
    return idNum;
  };

  const handleKeypress = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Enter':
        selectItem(e);
        break;
      case 'Escape':
        toggleDropdown(e);
        break;
      case 'ArrowDown':
        // const selectedItem = document.querySelector('.owlui-dropdown-menu-selectedMenuItem');
        if (e.target.id === 'select-button' && !dropdownOpen) {
          if (selectedItem) {
            toggleDropdown(e);
            const idNum = stripString(selectedItem);
            const target = document.querySelector(`#list-item-${idNum}`);
            selectWithArrows(target);
          } else {
            toggleDropdown(e);
            const firstLi = document.querySelector('#list-item-1');
            selectWithArrows(firstLi);
          }
        } else if (
          document.querySelector('.owlui-dropdown-menu-selectedMenuItem')
        ) {
          const currentlySelected = document.querySelector(
            '.owlui-dropdown-menu-selectedMenuItem'
          );
          const prevId = stripString(currentlySelected.id);
          if (prevId === dropdown?.items.length) {
            return;
          }
          const targetId = parseInt(prevId) + 1;
          const target = document.querySelector(`#list-item-${targetId}`);

          selectWithArrows(target);
        }
        break;
      case 'ArrowUp':
        if (dropdownOpen) {
          const currentlySelected = document.querySelector(
            '.owlui-dropdown-menu-selectedMenuItem'
          );
          const prevId = stripString(currentlySelected.id);
          const targetId = parseInt(prevId) - 1;
          const target = document.querySelector(`#list-item-${targetId}`);

          selectWithArrows(target);
        }
        break;
    }
  };

  // const ref = React.useRef();

  // React.useEffect(() => {
  //   const checkClickedOutside = e => {
  //     if(dropdownOpen && ref.current && !ref.current.contains(e.target)){
  //       console.log(document.querySelector('.owlui-dropdown-menu-selectedMenuItem').innerText);
  //       const selection = (document.querySelector('.owlui-dropdown-menu-selectedMenuItem').innerText)
  //       setSelectedItem(selection);
  //       console.log(selectedItem);
  //       setDropdownOpen(false);
  //       toggleDropdown(e);
  //     }
  //   };
  //   document.addEventListener('mousedown', checkClickedOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', checkClickedOutside);
  //   };
  // }, [dropdownOpen]);

  const dropdownWrapperClass = `${baseClass}wrapperHidden`;

  return (
    <div {...locals}>
      <div>{dropdown && dropdown['label']}</div>
      <button
        id="select-button"
        onKeyDown={handleKeypress}
        onClick={toggleDropdown}
      >
        <span>{selectedItem ? selectedItem : 'Item 1'}</span>
      </button>
      <ul id="dropdown-wrapper" className={styleMod[dropdownWrapperClass]}>
        {dropdown &&
          dropdown.items.map((item: DropDownContentItemProps) => {
            return (
              <li
                id={`list-item-${item.id}`}
                onClick={selectItem}
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
