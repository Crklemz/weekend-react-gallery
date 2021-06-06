import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
  getGalleryList()
  }, []);

  const getGalleryList = () => {
    axios.get('/gallery').then(response => {
      setGalleryList(response.data)
    }).catch(error => {
      console.error(error);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList list={galleryList} getGalleryList={getGalleryList}/>
      </div>
    );
}

export default App;
