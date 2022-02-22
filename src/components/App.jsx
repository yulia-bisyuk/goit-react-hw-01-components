import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friends/FriendsList';
import TransactionHistory from './Transactions/TransactionHistory';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';


export const App = () => {
  const { username, tag, location, avatar, stats } = user;
 
  return (
    <div>
      <Profile userName={username}
        tag={tag}
        location={location}
        avatar={avatar} 
        stats={stats} 
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  )
};
