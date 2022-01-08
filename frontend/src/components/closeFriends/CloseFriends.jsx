import './closeFriends.css'

export default function closeFriends({user}) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendDisplay" src={user.profilePicture} alt=""/>
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
