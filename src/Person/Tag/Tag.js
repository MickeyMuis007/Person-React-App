import React from 'react';

const tag = (props) => {
  return (
    <li className="row">
      <span className="col-md-6">{props.tag}</span> 
      <span className="col-md-3"><button className="btn btn-primary">Edit</button></span>
      <span className="col-md-3"><button className="btn btn-danger">Delete</button></span>
    </li>
  )
}

export default tag;