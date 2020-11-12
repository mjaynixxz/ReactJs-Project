import React from 'react';
import Imagecard from './Imagecard';
import './imageList.css';


const imageList = (props) => {
    const imageView = props.images.map((image) => {
        return <Imagecard key={image.id} image={image}/>
    });
   return (
       <div className= "image-list">{imageView}</div>
   );
}

export default imageList