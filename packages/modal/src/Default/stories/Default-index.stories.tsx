import React, { useState } from 'react';
import { Modal } from '../index';
import { ModalDefaultProps } from '../Default.types';

import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { fullscreen } from './Default-fullscreen.stories';
import { centered } from './Default-centered.stories';
import { scrollable } from './Default-scrollable.stories';

import { Button } from '../../../../button/src/index';

const modalContent: ModalDefaultProps = {
  size: 'sm',
  header: {
    bsProps: {
      closeButton: true,
      closeLabel: 'Close',
    },
    content: <h2>Modal Header</h2>,
  },
  body: {
    content: (
      <>
        <h6>Inside the modal body</h6>
        <hr />
        <p>Example of text inside the modal body.</p>
      </>
    ),
  },
  footer: {
    content: (
      <>
        <Button>Save Changes</Button>
      </>
    ),
  },
};

export const Default = (args: ModalDefaultProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <button onClick={toggleModal}>Click Me</button>
      <Modal {...args} show={showModal} onHide={toggleModal} />
    </div>
  );
};

Default.args = {
  size: size.defaultValue,
  theme: theme.defaultValue,
  fullscreen: fullscreen.defaultValue,
  centered: centered.defaultValue,
  scrollable: scrollable.defaultValue,
  modalContent: modalContent,
};

Default.argTypes = {
  size,
  theme,
  fullscreen,
  centered,
  scrollable,
};
