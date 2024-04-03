import { GitItem } from './GitItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GitGrid = ({ category } : {category:any}) => {

  //console.log('aca categoria1: '+category)
  const {images, isLoading} = useFetchGifs( category );
  console.log('aca data del hook: '+isLoading)
  /*const [images, setimages] = useState([])

  const getImages = async() => {
    console.log('aca categoria2: '+category)
    const newImages =await getGifs(category);
    //console.log(JSON.stringify('aca new images: '+newImages[0].id))
    setimages(newImages);
  }

  useEffect(() => {
    //getGifs(category).then( newImages => setimages(newImages));
    getImages();
    
  }, [])*/
  
  return (
    <>
        <h3> {category}</h3>
        {
          isLoading && ( <h2>Cargando...</h2>)
        }
        <p>Hola Mundo</p>
        <div className='card-grid'>
          {
            images.map( (images:any) =>(
              // <li key = {id}>{title}</li>
              <GitItem key={ images.id }
                       {...images}
                ></GitItem>
            ))
          }
          
          
        </div>
    </>
  )
}
