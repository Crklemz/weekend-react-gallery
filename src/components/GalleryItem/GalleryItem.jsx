import { useState } from 'react';
import axios from 'axios';

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
    }//end handleDescription

    // const handleDescription = () => {
    //     console.log(item);

    //     const data = {
    //         isShowing: !item.isShowing
    //     }

    //     //PUT request to server
    //     axios.put(`/list/${item.id}`, data).then(response => {
    //         console.log(response);
    //         //trigger the GET from props
    //         getGalleryList();
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }//end handleDescription

    return (
        <div className="GalleryItem">
            { picShowing ? (
                <div>
                    <img src={item.path}></img>
                     <button onClick={handleLike}>Like</button>
                    <p>{item.likes}: likes</p>
                </div>
            ) : (
                <div>
                <p>{item.description}</p>
                {item.isShowing && <p>show picture</p>}
               </div>
            )}

            <button onClick={() => setPicShowing(!picShowing)}>{picShowing ? 'Description' : 'Picture'}</button>
        </div>
    )
}//end GalleryItem

export default GalleryItem;