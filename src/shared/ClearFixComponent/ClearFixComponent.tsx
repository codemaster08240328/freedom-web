import React from 'react';
import Button from '../buttons/Button';


const ClearFixComponent = () => {
  return (
    <div className="clearfix">
      <Button className={'float-left'}>Prev</Button>
      <Button className={'float-right'}>Next</Button>
    </div>
  );
};

export default ClearFixComponent;
