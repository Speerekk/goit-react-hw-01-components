import React from 'react';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className={styles.item}>
          <span
            className={styles.status}
            style={{ backgroundColor: isOnline ? 'green' : 'red' }}
          ></span>
          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
