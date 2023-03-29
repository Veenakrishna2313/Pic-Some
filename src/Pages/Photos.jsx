import { useContext } from "react";
import { Context } from "../Context";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Photos=()=>{

  const {allPhotos}=useContext(Context);

  const photos= allPhotos.map((photo) => (
          <ImageListItem key={photo.id}>
            <img
              src={`${photo.url}?w=248&fit=crop&auto=format`}
              srcSet={`${photo.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={photo.title}
              loading="lazy"
            />
          </ImageListItem>
        ))

 

  return (
    <div className="image-container">      
      <ImageList className="image-list" variant="woven" cols={4} gap={5}>
       {photos}
      </ImageList>
  
    </div>
  )
}

export default Photos