import * as React from 'react';
import { Accordion } from '../index';
import { AccordionDefaultProps } from '../Default.types';
import { Dropdown } from '../../../../dropdown/src/Default';
import { Icon } from '../../../../icons/src';

import { pxScale } from './Default-px-scale.stories';
import { theme } from './Default-theme.stories';

const lessonDropdownItems = [
  {
    id: '1',
    label: (
      <div className="dropdown-item-wrapper left-pane-dropdown d-flex align-items-center">
        <Icon display="outlined" icon="crop_square" />
        <span>Add Slide</span>
      </div>
    ),
    value: undefined,
  },
  {
    id: '2',
    label: (
      <div className="dropdown-item-wrapper d-flex align-items-center">
        <Icon display="outlined" icon="edit" />
        <span>Rename</span>
      </div>
    ),
    value: undefined,
  },
  {
    id: '3',
    label: (
      <div className="dropdown-item-wrapper d-flex align-items-center">
        <Icon display="outlined" icon="content_copy" />
        <span>Duplicate</span>
      </div>
    ),
    value: undefined,
  },
  {
    id: '4',
    label: (
      <div className="dropdown-item-wrapper d-flex align-items-center">
        <Icon display="outlined" icon="arrow_upward" />
        <span>Move Up</span>
      </div>
    ),
    value: undefined,
  },
  {
    id: '5',
    label: (
      <div className="dropdown-item-wrapper d-flex align-items-center">
        <Icon display="outlined" icon="arrow_downward" />
        <span>Move Down</span>
      </div>
    ),
    value: undefined,
  },
  {
    id: '6',
    label: (
      <div className="dropdown-item-wrapper d-flex align-items-center">
        <Icon display="outlined" icon="trending_flat" />
        <span>Move To...</span>
      </div>
    ),
    value: undefined,
  },
  {
    id: '7',
    label: (
      <div className="dropdown-item-wrapper d-flex align-items-center">
        <Icon display="outlined" icon="delete" />
        <span>Delete Lesson</span>
      </div>
    ),
    value: undefined,
  },
];

const dropDownButton = (
  <span>
    <Icon icon="more_vert" />
  </span>
);

const items = [
  {
    id: '1',
    label: 'Header 1',
    view: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
          diam eu enim posuere malesuada. Nullam felis nulla, tempus quis lacus
          sed, mollis gravida orci. Nullam turpis justo, suscipit id pretium ut,
          dictum at tellus. Sed facilisis dui nisl, quis blandit enim bibendum
          sit amet. Vestibulum id tortor a lacus suscipit vulputate. Donec et
          felis nisl.
        </p>
      </div>
    ),
    labelAction: (
      <Dropdown
        align="start"
        items={lessonDropdownItems}
        className="resources-dropdown"
        variant="light"
        button={dropDownButton}
      />
    ),
  },
  {
    id: '2',
    label: (
      <div>
        <span>Icon </span>
        Header 1
      </div>
    ),
    view: (
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" />
        <label htmlFor="country">Country:</label>
        <input type="text" name="country" />
        <label htmlFor="city">City:</label>
        <input type="text" name="city" />
      </form>
    ),
  },
  {
    id: '3',
    label: 'Header 3',
    view: (
      <div>
        <h2>Build out custom content</h2>
        <img
          src="https://osg.ca/wp-content/uploads/2021/12/greenbook_transparent.png"
          alt="green book by OSG"
        />
      </div>
    ),
  },
];

export const Default = (args: AccordionDefaultProps) => <Accordion {...args} />;

Default.args = {
  pxScale: pxScale.defaultValue,
  theme: theme.defaultValue,
  items: items,
};

Default.argTypes = {
  pxScale,
  theme,
};
