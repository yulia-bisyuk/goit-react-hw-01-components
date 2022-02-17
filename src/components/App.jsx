import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './Friends/FriendsList';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';


export const App = () => {
  // const { username, tag, location, avatar, stats } = user;
 
  return (
    <div>
      <Profile userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar} 
        stats={user.stats} 
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
      <FriendsList friends={friends} />
    </div>
  )
};
