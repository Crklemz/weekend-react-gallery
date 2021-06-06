import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

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
        <GalleryList className="gallery-list" list={galleryList} getGalleryList={getGalleryList}/>
        <footer className="App-footer"><p>More adventures to coming soon...</p></footer>      
        </div>
    );
}

export default App;
