import { useContext,useState } from "react";
import ImageListItem from '@mui/material/ImageListItem';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const Images=({photo})=>{

  const [hovered,setHovered]=useState(false);
   console.log(hovered)
  return(

     <ImageListItem
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)} >           
    
         <img
              src={`${photo.url}?w=248&fit=crop&auto=format`}
              srcSet={`${photo.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={photo.title}
              loading="lazy"
                          
            />
            
            {hovered && <FavoriteBorderRoundedIcon className="heart-icon" fontSize="large"/>}
            {hovered && <AddCircleRoundedIcon className="add-icon" fontSize="large"/>}
            
     </ImageListItem>
  )
   
}

export default Images