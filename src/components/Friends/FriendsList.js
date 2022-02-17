import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';
import s from './FriendsListItem.module.css';

const FriendsList = ({ friends }) => {
    return <section className={s.friends}>
    <ul className={s.friendList}>
    
        {friends.map(friend => (
            <li key={friend.id}>
            <FriendsListItem
                id={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
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