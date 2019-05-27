import React from 'react';

const friend = (props) => {
  return (
    <li className="row">
      <span className="col-md-6">{props.friend.name}</span> 
      <button className="col-md-3 btn btn-primary">Edit</button>
      <button className="col-md-3 btn btn-info">View</button>
    </li>
  )
}

export default friend;