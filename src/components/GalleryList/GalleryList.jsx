import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList ({list, getGalleryList}) {
    //reder and loop list 
    return (
        <div className="gallery-list">
            {list.map(item => {
                console.log(item);
                return (
                    <GalleryItem getGalleryList={getGalleryList} key={item.id} item={item} />
                )
            })}
        </div>
    )
}

export default GalleryList;