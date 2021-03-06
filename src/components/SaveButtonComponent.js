import React from 'react';

function SaveButton(props) {
  return (
    <button onClick={props.onClick} className='format-button'>
      <h5>Save</h5>
      <div className="fa fa-save fa-3x"></div>
    </button>
  );
}

export default SaveButton;

