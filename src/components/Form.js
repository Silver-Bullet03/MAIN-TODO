import React , {useState} from 'react'

export default function Form(props){

  const [todo ,setTodo] = useState("");

  const handleSubmit = e => {
     e.preventDefault();
    
    props.handleSubmit(todo);
    setTodo('');
  }

  const handleChange = e => {
    setTodo(e.target.value);
  }

  return (
  
    <div className = 'form-cont'>
         <form className = 'form' onSubmit = {handleSubmit}>
             <input type = 'text' placeholder = 'type here' onChange={handleChange} value = {todo}/>
             <button className = 'todo-button' type = 'submit'>ADD </button>
         </form>
    </div>
  )
}