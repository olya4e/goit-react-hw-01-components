import PropTypes from 'prop-types'
import css from './FriendList.module.css'
const FreindListItem = ({id, avatar, name, isOnline}) => {
    return (
        <li className={css.item} key={id}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
        </li>
            
    )
}
FreindListItem.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
        
} 
export default FreindListItem