import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css';

function GalleryItem({item, getGalleryList}) {

    //picShowing is used for toggling the picture to show the description or picture
    const [picShowing, setPicShowing] = useState(true);

    const handleLike = () => {
        console.log(item);

        //PUT request to server
        axios.put(`/gallery/like/${item.id}`).then(response => {
            console.log('in like put -->', response);
            getGalleryList();
        })
    }//end handleLike

    return (
        <div>
            { picShowing ? (
                <div className="photoShowingDiv">
                    <img src={item.path} className="image"></img>
                    <p>{item.likes}: likes</p>
                    <button onClick={handleLike} className="likeBtn">Like</button>
                    
                    <button onClick={() => setPicShowing(!picShowing)}>{picShowing ? 'Description' : 'Picture'}</button>

                </div>
            ) : (
                <div className="descriptionDiv">
                <p>{item.description}</p>
                {item.isShowing && <p>show picture</p>}
                <button className="picBtn" onClick={() => setPicShowing(!picShowing)}>{picShowing ? 'Description' : 'Show Picture'}</button>
               </div>
            )}
        </div>
    )
}//end GalleryItem

export default GalleryItem;