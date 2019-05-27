import React from 'react';

const friend = (props) => {
  return (
    <li className="row">
      <span className="col-md-6">{props.friend.name}</span> 
      <span className="col-md-3"><button className="btn btn-primary">Edit</button></span>
      <span className="col-md-3"><button className="btn btn-info">View</button></span>
    </li>
  )
}

export default friend;