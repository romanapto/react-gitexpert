import { useState } from 'react'

//export const AddCategory = ({setcategories}:{setcategories:any}) => {
export const AddCategory = ({onNewCategory}:{onNewCategory:any}) => {
    //onAddCategory

    const [InputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({target}:{target:any}) => {
        console.log(target.value)
        setInputValue(target.value);
    }

    const onSubmit = (event:any) => {
        event.preventDefault();
        console.log(InputValue);
        if(InputValue.trim().length<=1) return;
        //setcategories( (category: any) => [InputValue,...category])
        onNewCategory(InputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input type="text" 
            placeholder="Buscar gits"
            value={ InputValue }
            //onChange={ (event) => onInputChange(event) }
            onChange={ onInputChange }
            />
        </form>
    )
}
