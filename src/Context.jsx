import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const Context=createContext();

const ContextProvider=({children})=>{

  const [allPhotos, setAllPhotos]=useState([]);
  const [cartItems,setCartItems]=useState([]);
  console.log("cartItems",cartItems)
 

  const addToCart=(newItem)=>{
     setCartItems(prevItem=>[...prevItem,newItem]);
  }

  const removeFromCart=(id)=>{
    setCartItems(prevItems=>prevItems.filter(item=>item.id!==id))
  }

  const toggleFavorite=(id)=>{
   const updatedArr=allPhotos.map(photo=>{
      if(photo.id===id){
        return {...photo,isFavorite:!photo.isFavorite}
      }
      return photo
    })

    setAllPhotos(updatedArr);
  }

  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(res=>res.json()
    .then(data=>setAllPhotos(data)))
  },[])

 
  return(
  <Context.Provider value={{allPhotos:allPhotos, toggleFavorite:toggleFavorite, cartItems:cartItems,addToCart:addToCart, removeFromCart:removeFromCart }}>
        {children}
    </Context.Provider>
  )

}

export {ContextProvider,Context}