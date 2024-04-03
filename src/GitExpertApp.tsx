import { useState } from 'react'
import { AddCategory, GitGrid } from './components'

export const GitExpertApp = () => {

  const [categories, setcategories] = useState(['one Punch'])

  const onAddCategory = ( newCategory:any) => {
      console.log(newCategory)
      if ( categories.includes(newCategory)) return;
      setcategories([newCategory,...categories])
      //setcategories(cat => [...categories,'Valorant'])
  }

  console.log(categories)
  return (
    <>
        <h1>GitExpertApp</h1>
        <AddCategory 
            //setcategories={setcategories}
            onNewCategory={ (value:any) => onAddCategory(value) }
          ></AddCategory>
        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        <ol>
          { 
              categories.map( category =>(
                //return <li key={category}>{category}</li>
                /*<div key={ category }>
                  <h3> { category }</h3>
                  <li> { category}</li>
                </div>*/
                <GitGrid key={ category } 
                category={ category }>

                </GitGrid>
              ))
          }
          
        </ol>
    </>
    
  )
}
