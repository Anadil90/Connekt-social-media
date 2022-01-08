import './sidebar.css'

import RssFeedIcon from '@material-ui/icons/RssFeed';
import WorkIcon from '@material-ui/icons/Work';
import Groups from '@material-ui/icons/People';
import Events from '@material-ui/icons/Event';

import  { Users }  from '../../dummyData';
import CloseFriends from '../closeFriends/CloseFriends'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>

                    <li className="sidebarListItem">
                        <WorkIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Work</span>
                    </li>

                    <li className="sidebarListItem">
                        <Groups className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>

                    <li className="sidebarListItem">
                        <Events className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>

                <button className="sidebarButton">More</button>
                <hr className="sidebarLine"/>
                <ul className="sidebarFriendList">

                    {Users.map((u) => (
                        <CloseFriends key={u.id} user={u} />
                    ))}
                    
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar
