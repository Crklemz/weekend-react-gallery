import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css';

function GalleryList ({list, getGalleryList}) {
    //reder and loop list 
    return (
        <container className="list-container">
        <div className="gallery-list">
            <table>
                <tbody>
                    <tb>
                    {list.map(item => {
                console.log(item);
                return (
                    <GalleryItem getGalleryList={getGalleryList} key={item.id} item={item} />
                )
            })}
                    </tb>
                </tbody>
            </table>
        </div>
        </container>
    )
}

export default GalleryList;