import PropTypes from 'prop-types';
import s from './FriendsListItem.module.css';
import defaultIcon from '../../default-icon.png';


const FriendsListItem = ({ avatar, name, isOnline, id }) => {
    return <div className={s.item}>
        <span className={s.status} style={isOnline ? { backgroundColor: "green" } : { backgroundColor: "red" }}></span>
        <img className={s.avatar} src={avatar || defaultIcon} alt="User avatar" width="48" />
        <p className={s.name}>{ name }</p>
    </div>
};

FriendsListItem.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired || null,

}
export default FriendsListItem;