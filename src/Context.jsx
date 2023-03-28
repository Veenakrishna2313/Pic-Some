import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const Context=createContext();

const ContextProvider=({children})=>{

  const [allPhotos, setAllPhotos]=useState([])

  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
    .then(res=>res.json()
    .then(data=>setAllPhotos(data)))
  },[])

 
  return(
  <Context.Provider value={{allPhotos:allPhotos}}>
        {children}
    </Context.Provider>
  )

}

export {ContextProvider,Context}