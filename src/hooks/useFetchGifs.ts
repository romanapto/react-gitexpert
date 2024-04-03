import {useEffect, useState} from 'react'

import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category:any) => {

  const [images, setimages] = useState([])
  const [isLoading, setIsloaging] = useState(true)

  const getImages = async() => {
    console.log('aca categoria2: '+category)
    const newImages =await getGifs(category);
    //console.log(JSON.stringify('aca new images: '+newImages[0].id))
    setimages(newImages);
    setIsloaging(false)
  }

  useEffect(() => {
    //getGifs(category).then( newImages => setimages(newImages));
    getImages();
    
  }, [])
  return {
    images:images,
    isLoading: isLoading
  }
}
