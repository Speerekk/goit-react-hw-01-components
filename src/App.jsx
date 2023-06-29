import React from 'react';
import Profile from './components/Profile/Profiles.jsx';
import Statistics from './components/Statistics/Statisticss';
import FriendList from './components/FriendsList/FriendLists';
import TransactionHistory from './components/TransactionHistory/TransactionHistorys';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;