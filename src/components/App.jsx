import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friends/FriendsList';
import TransactionHistory from './Transactions/TransactionHistory';
import user from '../data/user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';


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
