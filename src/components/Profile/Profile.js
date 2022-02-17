import PropTypes from 'prop-types';
import s from './Profile.module.css';
import { getRandomHexColor } from '../Statistics/Statistics';

const Profile = ({
  userName, tag, location, avatar,
  stats
}) => {
    return <section className={s.profile}>
  <div className="description">
    <img
      src={avatar}
      alt={userName}
      className={s.avatar}
    />
    <p className={s.name}>{userName}</p>
            <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.statsItem}>
      <span className={s.label}>Followers</span>
                <span className={s.quantity} style={{color: `${getRandomHexColor()}`}}>{ stats.followers}</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.label}>Views</span>
      <span className={s.quantity} style={{color: `${getRandomHexColor()}`}}>{ stats.views}</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity} style={{color: `${getRandomHexColor()}`}}>{ stats.likes}</span>
    </li>
  </ul>
</section>

};

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

export default Profile;