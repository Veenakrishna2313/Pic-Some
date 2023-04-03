import { useContext,useState } from "react";
import {Context} from "../Context"
import ImageListItem from '@mui/material/ImageListItem';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import PropTypes from "prop-types"

const Images=({photo})=>{

  const [hovered,setHovered]=useState(false);
  const {toggleFavorite}=useContext(Context);

  const heartIcon=()=>{
    if(photo.isFavorite) {
   return <FavoriteRoundedIcon onClick={()=>toggleFavorite(photo.id)} className="heart-icon" fontSize="large"/> 
    } else if(hovered){
      return  <FavoriteBorderRoundedIcon onClick={()=>toggleFavorite(photo.id)} className="heart-icon" fontSize="large"/>
    }
  }
    
    const addIcon=hovered && <AddCircleRoundedIcon className="add-icon" fontSize="large"/>
 
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

            {heartIcon()}
            {addIcon}
            
     </ImageListItem>
  )
   
}

Images.propTypes={
  photo: PropTypes.shape({
     id:PropTypes.string.isRequired,
     url:PropTypes.string.isRequired,
     isFavorite:PropTypes.bool
  })
 
}

export default Images