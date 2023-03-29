import { useContext,useState } from "react";
import { Context } from "../Context";
import ImageList from '@mui/material/ImageList';
import Images from "../Components/Images"

const Photos=()=>{

  const {allPhotos}=useContext(Context); 
  console.log(allPhotos)

  const photos= allPhotos.map((photo) => (          
           <Images key={photo.id} photo={photo}/>            
        ))

  return (
    <div className="image-container">      
      <ImageList  variant="woven" cols={4} gap={5}>
       {photos}
      </ImageList>
    </div>
  )
}

export default Photos