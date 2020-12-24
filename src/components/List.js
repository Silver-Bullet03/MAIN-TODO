import React , {useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import Form from './Form'

export default function List(props){

   const [edit,setEdit] = useState('');
   const [newv, setNewv] = useState('');

   const changeUpdate = e => {
     setNewv(e.target.value);
   }

   const submitUpdate = e => { 
      e.preventDefault();
      props.editTodo(edit,newv);
      setEdit('');
      setNewv('');
  }

   if(edit){
     return <form className = 'form' onSubmit = {submitUpdate}>
                <input type = 'text' placeholder = 'type here' onChange ={changeUpdate} value = {newv} />
                <button className = 'todo-button'>Update</button>
            </form>
   }

  

   const arr = props.data;
   return arr.map((todo,index) => (
     
       <div className = 'list-container' >
           <div key = {index} className = 'text'>{todo}</div>
           <svg className = 'sline'>
                 <line x1="0" y1="0" x2="380" y2="0" className = 'line'/>
           </svg>
           <div className= 'delete'>
                <RiCloseCircleLine  onClick = {() => props.deleteTodo(todo)}/>
                <TiEdit onClick = {() => setEdit(todo)} />
           </div>
       </div>
     
    ));
};