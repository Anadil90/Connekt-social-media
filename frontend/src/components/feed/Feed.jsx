import './feed.css'
import Share from '../share/Share';
import Post from '../posts/Posts';
import { Posts } from  '../../dummyData';

function Feed() {
    
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />

                {Posts.map((p) => ( 
                    <Post key={p.id} data={p} /> 
                ))}

            </div>
            
        </div>
        
    )
}


export default Feed
