import React, { useEffect, useState } from 'react';
import Create from './Create';
import './App.css';
import axios from 'axios';
import { BsCircleFill,BsFillCheckCircleFill,BsFillTrashFill } from 'react-icons/bs';

const Home = () => {
    const [todos,setTodos]=useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:5000/get')
        .then(result=> setTodos(result.data))
        .catch(err=>console.log(err))
    },[])

    const edit = (id)=>{
        axios.put(`http://localhost:5000/edit/${id}`)
        .then(result=>console.log(result.data),
        window.location.reload() )
        .catch(err=>console.log(err))

    };

    const Hdelete = (id)=>{
        axios.delete(`http://localhost:5000/delete/${id}`)
        .then(result=>console.log(result.data),
        window.location.reload() )
        .catch(err=>console.log(err))

    }
  return (
    <main>
        <Create/>
           {
           todos.length === 0 ? <div className='task'>No tasks found</div>
            :todos.map((todo)=>
               <div className='task' key={todo._id}>
                    <div className='checkbox'  onClick={()=>edit(todo._id)} >
                        {todo.done ? <BsFillCheckCircleFill className='icon'/>:<BsCircleFill className='icon'/>}
                        <p className={todo.done ? 'through' :  'normal' }>{todo.task}</p>
                    </div>
                    <div onClick={()=>Hdelete(todo._id)}>
                        <span><BsFillTrashFill className='icon' /></span>
                    </div>
                </div> 
              )
                
           
}
    </main>
    
  )
}

export default Home