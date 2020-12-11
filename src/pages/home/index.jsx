
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobList from "../../components/JobList";

const Home = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    let selJob = useSelector((state)=>  state.selectedJob);


   

    useEffect(()=>{
        
        if(selJob){
            setValue(selJob);
        }
       
        // selJob && setValue()
    }, [selJob])


    
    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value)
    }

    const addTodo = () => {
            dispatch({
                type: 'CREATE',
                payload: value,
            })
            setValue("");

          
    }

    const editToDo = (e) => {
        e.preventDefault();
        setValue(e.target.value)
        dispatch({
            type: 'UPDATE',
            // payload: value,
            payload: [{
                value,
                selJob,
            }]
        })
        console.log(value);
        console.log(selJob);

        
    }


    

    
    // // console.log(selJob, 'dads')
    // useEffect(()=> {
           
    //     })
    // }, [jobArr]);

    return(
        <div className="container">
            <h1 className="text-center mt-4">Todolist</h1>
            <div className="d-flex mb-5">
                <span>Hello </span>
            </div>
            <div>
                <div>
                    <input  onChange={handleChange} type="text" value ={value} />
                    <br/>
                    {selJob ? <button className="mt-1 mb-5" onClick={editToDo} > Edit</button> :  <button className="mt-1 mb-5" onClick = {addTodo}> Add</button> }

                </div>
                <JobList />
            </div>
        </div>
    );

}

export default Home;