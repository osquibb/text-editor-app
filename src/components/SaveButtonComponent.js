import React from 'react';
import { Button } from 'reactstrap';


function SaveButton(props) {
  return (
    <Button onClick={props.onClick} color="secondary" outline style={{borderColor: "white"}}>
      <div className="font-weight-light">Save</div>
      <div className="fa fa-arrow-circle-right fa-3x"></div>
    </Button>
  );
}

export default SaveButton;

