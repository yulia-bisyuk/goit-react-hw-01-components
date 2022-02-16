import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../user.json';
import data from '../data.json';
console.log(data);


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
    </div>
  )
};
