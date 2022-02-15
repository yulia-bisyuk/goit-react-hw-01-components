import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../user.json';
import data from '../data.json';


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
    </div>
  )
};
