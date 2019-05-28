import React from 'react';

const friend = (props) => {
  return (
    <li className="row mb-2">
      <span className="col-md-3">{props.friend.name}</span> 
      <button className="mx-2 btn btn-primary">Edit</button>
      <button className="mx-2 btn btn-info">View</button>
    </li>
  )
}

export default friend;