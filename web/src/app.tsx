import React from 'react';
import { Button, Icon } from '@owlui/lib';

const Page = () => {
  return (
    <div className="owlui-container">
      <div className="owlui-row">
        <div className="owlui-col-4">
          <Button>
            <Icon icon="settings" display="outlined" />
            Hello
          </Button>
        </div>
        <div className="owlui-col-4">4</div>
        <div className="owlui-col-4">4</div>
      </div>
    </div>
  );
};

export default Page;
