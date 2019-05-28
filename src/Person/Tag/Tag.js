import React from 'react';

const tag = (props) => {
  return (
    <li className="row mb-2">
      <span className="col-md-3">{props.tag}</span> 
      <button className="mx-2 btn btn-primary">Edit</button>
      <button className="mx-2 btn btn-danger">Delete</button>
    </li>
  )
}

export default tag;