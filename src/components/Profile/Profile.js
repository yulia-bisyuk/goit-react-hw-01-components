import PropTypes from 'prop-types';
import s from './Profile.module.css'

const Profile = ({
    userName, tag, location, avatar, stats
}) => {
    return <div className={s.profile}>
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
                <span className={s.quantity}>{ stats.followers}</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{ stats.views}</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{ stats.likes}</span>
    </li>
  </ul>
</div>

};

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

export default Profile;