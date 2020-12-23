import React , {useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
export default function List(props){

   const arr = props.data;
   return arr.map((todo,index) => (
     
       <div className = 'list-container' >
           <div key = {index}>{todo}
              <div className= 'delete'>
                <RiCloseCircleLine  onClick = {() => props.deleteTodo(todo)}/>
                <TiEdit />
              </div>
            </div>
       </div>
     
    ));
};