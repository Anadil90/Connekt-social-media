import './topbar.css'
import { Search, Chat, Notifications } from '@material-ui/icons'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Topbar() {
    return (
        <div>
            <div className="topbarContainer">
                <div className="topBarLeft">
                    <span className="logo">Connekt</span>
                </div>
                
                <div className="topbarCenter">
                    <div className="searchBar">
                        <Search style={{marginLeft: "10px"}}/>
                        <input className="searchInput" placeholder="Search for interesting stuff"></input>
                    </div>
                </div>

                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink linksTopLeft">Homepage</span>
                        <span className="topbarLink linksTopLeft">Timeline</span>
                        <img src="" alt="" className="profileImage"></img>
                    </div>

                        <div className="topbarIcons">
                            <div className="topbarIconItem">
                                <Notifications />
                                <span className="topbarIconBadge">4</span>
                            </div>

                            <div className="topbarIconItem">
                                <ExitToAppIcon />
                                <span className="topbarLink">Login</span>
                            </div>
                            
                            <div className="topbarIconItem">
                                <PersonAddIcon />
                                <span className="topbarLink">Sign up</span>
                            </div>
                            <div className="topbarIconItem">
                                <PersonAddIcon />
                                <span className="topbarLink">Sign up</span>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" class="topbarImg"/>
                </div>
            </div>  
        </div>
    )
}
