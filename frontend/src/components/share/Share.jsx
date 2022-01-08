import "./share.css";
import { PermMedia, Label, EmojiEmotions } from "@material-ui/icons";

function share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfilePicture" src="assets/person.jpg" alt=""/>
                    <input placeholder="what's in your mind today?" className="shareThoughts"/>
                </div>
                <hr className="shareLine"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia />
                            <span className="shareOptionLabel">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label className="tagPost" />
                            <span className="shareOptionLabel">Tag</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions className="emotions"/>
                            <span className="shareOptionLabel">Emotions</span>
                        </div>
                        <div className="shareOption">
                            <form id="sharePost" action="#" method="POST">
                                <button className="postButton">Post Something</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default share
