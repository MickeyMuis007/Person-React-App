import React from 'react';
import Friend from './Friend/Friend';
import Tag from './Tag/Tag';
import './Person.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faEye);

const person = (props) => {
  const friendList = props.person.friends;
  const friends = (
    <ul className="">
      {friendList.map((friend, ) => {
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
    <div className="container person-container text-uppercase">
      <div className="d-flex justify-content-center">
        {props.person.name}
      </div>
      <div>Gender: {props.person.gender}</div>
      <div>Friends:</div>
      <div className="container list-container">
        {friends}
        <div className="d-flex justify-content-end">
          <button className="b-float" data-toggle="tooltip" data-placement="top" title="Add Friend"><FontAwesomeIcon icon="plus" /></button>
        </div>
      </div>

      <div>Tags:</div>
      <div className="container list-container">
        {tags}
        <div className="d-flex justify-content-end">
          <button className="b-float" data-toggle="tooltip" data-placement="top" title="Add Tag"><FontAwesomeIcon icon="plus" /></button>
        </div>
      </div>

    </div>
  )
}

export default person;