
export const getGifs = async( category : {category:any}) =>{
  console.log('aca categoria: '+category)
    const url= `https://api.giphy.com/v1/gifs/search?api_key=tmXcuUY6T4JYa01zuczrwqyO9cNB9bNP&q=${ category }&limit=20`;
    const resp = await fetch( url).then(res => res.json());
    const {data} = await resp
    console.log(url)
    //console.log('respuesta servicio '+JSON.stringify(resp));
    //console.log('respuesta data '+JSON.stringify(data));
    const gifs = data.map( (img:any) => ({
      id:img.id,
      title:img.title,
      url: img.images.downsized_medium.url
    }))
  
    console.log('nuevos gifs'+ JSON.stringify(gifs));
  
    return gifs;
  }

  