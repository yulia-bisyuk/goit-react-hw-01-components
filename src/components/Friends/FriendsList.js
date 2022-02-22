import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import s from './FriendsListItem.module.css';

const FriendsList = ({ friends }) => {
    return <section className={s.friends}>
    <ul className={s.friendList}>
    
        {friends.map(({id, avatar, name, isOnline}) => (
            <li key={id}>
            <FriendsListItem
                id={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
            </li>
        )
        )}
        </ul>
        </section>
};

FriendsList.propTypes = {
    friends: PropTypes.array.isRequired,
};
export default FriendsList;