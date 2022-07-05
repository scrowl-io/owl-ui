import React, { useState } from 'react';
import { Modal } from '../index';
import { ModalDefaultProps } from '../Default.types';

import { variant } from './Default-variant.stories';
import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';

const modalContent = {
  header: {
    closeButton: true,
    closeLabel: 'Close',
    closeVariant: 'black',
    content: <h2>Modal Header</h2>,
  },
  body: {
    content: <p>Inside the modal body.</p>,
  },
};

export const Default = (args: ModalDefaultProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <button onClick={toggleModal}>Click Me</button>
      <Modal {...args} show={showModal} onHide={toggleModal}>
        Hello World
      </Modal>
    </div>
  );
};

Default.args = {
  variant: variant.defaultValue,
  size: size.defaultValue,
  theme: theme.defaultValue,
  modalContent: modalContent,
};

Default.argTypes = {
  variant,
  size,
  theme,
};
