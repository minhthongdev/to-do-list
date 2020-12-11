import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const JobItem = (props) => {

    const {name} = props.item;
    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    const todo = useSelector((state)=>  state.jobList);


    const handleDelete = () => {
        dispatch({
            type: "DELETE",
            payload: name,
        })
    }


    const handleEdit = () => {
        dispatch({
            type: 'SELECT',
            payload: name,
        })
    }

    const editToDo = () => {
        const newToDo = prompt('Let\'s make something changes');
        value.filter(todo => {
            if(todo.name === name + 1){
                todo.name = newToDo;
            }
            return todo;
        })
        setValue({todo});

    }


    return(
        <tr>
        <td>{name}</td>
        
        <td>
          <button onClick={handleEdit}  className="btn btn-info mr-2">
            Edit
          </button>
          <button  onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    )

}

export default JobItem;