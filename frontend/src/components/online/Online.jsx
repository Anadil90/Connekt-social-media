import './online.css'

function online({ user }) {
    return (
       <li className="rightbarFriend">
           <div className="rightbarProfileImgWrapper">
               <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
               <span className="rightbarOnlineStatus"></span>
           </div>
           <span className="rightbarUsername">{user.username}</span>
       </li>
    )
}

export default online
