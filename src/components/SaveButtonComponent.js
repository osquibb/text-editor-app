import React from 'react';
import { Button } from 'reactstrap';


function SaveButton() {
  return (
    <Button color="secondary" outline style={{borderColor: "white"}}>
      <div>Save</div>
      <div className="fa fa-arrow-circle-right fa-3x"></div>
    </Button>
  );
}

export default SaveButton;

