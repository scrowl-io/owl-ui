import React from 'react';
import { Button, Icon } from '@owlui/lib';

const Page = () => {
  return (
    <div className="owlui-grid-container">
      <div className="owlui-grid-row">
        <div className="owlui-grid-col-xs-4">
          <Button>
            <Icon icon="settings" />
            Hello
          </Button>
        </div>
        <div className="owlui-grid-col-xs-4">4</div>
        <div className="owlui-grid-col-xs-4">4</div>
      </div>
    </div>
  );
};

export default Page;
