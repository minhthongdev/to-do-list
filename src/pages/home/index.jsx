import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobList from "../../components/JobList";
const Home = () => {

    
    const dispatch = useDispatch();

    const [state, setState] = useState({
        value: '',
        state: '',
        valueSearch: '',
        disabledBtnAdd: '',
    })
    const {value,valueSearch,disabledBtnAdd} = state;



    
    let selJob = useSelector((state)=>  state.selectedJob);

    useEffect(()=>{  
        if(selJob){
            setState({
                ...state,
                value : selJob,
                disabledBtnAdd :'',
            });
        }
    }, [selJob])


    
    const handleChange = (e) => {
        e.preventDefault();
        setState({
            ...state,
            value : e.target.value,
        });
    }
    const handleChangeSearch = (e) => {
        e.preventDefault();
        const keyword = document.getElementById("txtSearch").value.trim().toLowerCase();

        setState({
            ...state,
            state : e.target.value,
            valueSearch : keyword,
        });
        
        dispatch({
            type: 'SEARCH',
        })
    }

    const addTodo = (value) => {
            return(e) => {
                dispatch({
                    type: 'CREATE',
                    payload: value,
                })
                setState({
                    ...state,
                    value : '',
                });
            }  
    }


    const editToDo = (value, selJob) => {
        return(e) => {
            e.preventDefault();
            
            setState({
                ...state,
                value : e.target.value,
                disabledBtnAdd :'asd',
            });
           
            dispatch({
                type: 'UPDATE',
                payload: [{
                    value,
                    selJob,
                }]
            })
        }
    }

    
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
                  
                    {selJob
                    ? 
                    <div>
                            
                            { disabledBtnAdd
                            
                            ?
                                <button  className="mt-1 mb-5 mr-4" onClick = {addTodo(value)}> Add</button> 
                            :

                            <button disabled className="mt-1 mb-5 mr-4" onClick = {addTodo(value)}> Add</button> 
                            }
                            <button className="mt-1 mb-5" onClick={editToDo(value, selJob)} > Edit</button>

                    </div>
                    : 
                     <button  className="mt-1 mb-5"  onClick = {addTodo(value)}> Add</button> 

                    }
                     <br/>                   
                    <p>Tim Kiem</p>
                     <input  onChange={handleChangeSearch} id="txtSearch" type="text" state ={state.state} />


                </div>
                <JobList valueSearch={valueSearch} editToDo={editToDo} />
            </div>
        </div>
    );

}

export default Home;