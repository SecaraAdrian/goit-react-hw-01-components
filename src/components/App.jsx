import React from 'react';
import Profile from './profile/Profile'
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';


const App = () => (
  <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <div>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
    <TransactionHistory items={transactions} />
  </div>
);

export default App;