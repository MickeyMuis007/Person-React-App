import React from 'react';

const tag = (props) => {
  return (
    <li className="row">
      <span className="col-md-6">{props.tag}</span> 
      <button className="col-md-3 btn btn-primary">Edit</button>
      <button className="col-md-3 btn btn-danger">Delete</button>
    </li>
  )
}

export default tag;