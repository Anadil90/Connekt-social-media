import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './home.css'

function home() {
    return (
        <>
            <Topbar />
            <div className="menuContainer">
               <Sidebar />
                <Feed />
                <Rightbar /> 
            </div>   
        </>
    )
}

export default home
