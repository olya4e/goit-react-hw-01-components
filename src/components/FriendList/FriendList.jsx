import css from './FriendList.module.css'
import FreindListItem from './FriendListItem'
const FriendList = ({friends}) => {
    return (
        <ul className={css.friend__list}>
            {friends.map(friend => {
                return <FreindListItem {...friend} key={ friend.id} />
            })}
  
</ul>
   ) 
}

export default FriendList