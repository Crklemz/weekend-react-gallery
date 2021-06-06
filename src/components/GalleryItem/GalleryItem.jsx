import { useState } from 'react';
import axios from 'axios';

function GalleryItem({item, getGalleryList}) {

    //picShowing is used for toggling the picture to show the description or picture
    const [picShowing, setPicShowing] = useState(true);

    const handleDescription = () => {
        console.log(item);

        const data = {
            isShowing: !item.isShowing
        }

        //PUT request to server
        axios.put(`/list/${item.id}`, data).then(response => {
            console.log(response);
            //trigger the GET from props
            getGalleryList();
        }).catch(error => {
            console.log(error);
        })
    }//end handleDescription

    return (
        <div className="GalleryItem">
            { picShowing ? (
                <div>
                    Show Description
                </div>
            ) : (
                <div>
                {item.isShowing && <p>show piscture</p>} 
               </div>
            )}

            <button onClick={() => setPicShowing(!picShowing)}>{picShowing ? 'Description' : 'Picture'}</button>
        </div>
    )
}//end GalleryItem

export default GalleryItem;