import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItems';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          id={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
