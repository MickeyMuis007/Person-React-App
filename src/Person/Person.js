import React from 'react';
import Friend from './Friend/Friend';
import Tag from './Tag/Tag';

const person = (props) => {
  const friendList = props.person.friends;
  const friends = (
      <ul className="col-md-2">
        {friendList.map((friend,) => {
          return <Friend 
            friend={friend}
            key={friend.id}
          />
        })}
      </ul>
    );
    const tagList = props.person.tags;
    const tags = (
        <ul className="col-md-2">
          {tagList.map((tag) => {
            return <Tag 
              tag={tag}
              key={`${new Date().getTime()}`}
            />
          })}
        </ul>
      );
  
  return (
    <div>
      <div>Name: {props.person.name}</div>
      <div>Gender: {props.person.gender}</div>
      <div>Friends:</div>
      <div>
        {friends}
      </div>
      <button className="btn btn-success">Add Friend</button>
      <div>Tags:</div>
      <div>
        {tags}
      </div>
      <button className="btn btn-success">Add Tag</button>
    </div>
  )
}

export default person;