import React from 'react';
import Friend from './Friend/Friend';
import Tag from './Tag/Tag';
import './Person.css';

const person = (props) => {
  const friendList = props.person.friends;
  const friends = (
      <ul className="">
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
        <ul className="">
          {tagList.map((tag, index) => {
            return <Tag 
              tag={tag}
              key={`${new Date().getTime() + index}`}
            />
          })}
        </ul>
      );
  
  return (
    <div className="container person-container">
      <div>
       Name:{props.person.name}
      </div>
      <div>Gender: {props.person.gender}</div>
      <div>Friends:</div>
      <div className="">
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