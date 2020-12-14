import React from "react";


const JobItem = (props) => {

  
    const {editToDo, handleDelete, item} = props;
    const {name, id} = item;

   


    return(
        <tr>
        <td>{name}</td>
        
        <td>
          <button onClick={editToDo(id)}  className="btn btn-info mr-2">
            Edit
          </button>
          <button  onClick={handleDelete(id)} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    )
}

export default JobItem;