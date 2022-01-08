import "./posts.css";
import { MoreVert } from "@material-ui/icons"; 
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Users } from '../../dummyData';
import { useState } from 'react';

export default function Post ({ data }) {
    
    const [like, setLikes] = useState(3)
    const [isLiked, setIsLiked] = useState(false)

    const handleLikes = () => {
        setLikes(isLiked ? like-1 : like+1)
    }

    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="profileImagePost" src={Users.filter(usr => usr.id === data.userId)[0].profilePicture} alt=""/>
                        <span className="postedBy">
                            {Users.filter(usr => usr.id === data.userId)[0].username}
                        </span>
                        <span className="postedByTime">{data.posted}</span>
                        
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postedMessage">
                        
                        <span className="postText">{ data.desc}</span>
                    </div>

                    <img className="postedImage" src={data.photo} alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <FavoriteIcon className="heartIcon"/>
                        <ThumbUpIcon className="likeIcon" onClick={handleLikes}/>
                        <span className="likeCounter">{like}</span>
                       
                    </div>

                    <div className="postBottomRight">
                         <span className="commentCounter">{data.comments}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
