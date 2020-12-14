import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JobList from "../../components/JobList";
const Home = () => {


    const dispatch = useDispatch();

    const [state, setState] = useState({
        value: '',
        state: '',
        valueSearch: '',
        type: 'CREATE',
        idEdit: null,
    })
    const { value, valueSearch } = state;


    const data = useSelector((state) => state.jobList);

    const handleChange = (e) => {
        e.preventDefault();
        setState((prevState) => ({
            ...prevState,
            value: e.target.value,
        }))
    }

    const handleChangeSearch = (e) => {     
        e.preventDefault();
        const keyword = document.getElementById("txtSearch").value.trim().toLowerCase();
        setState((prevState) => ({
            ...prevState,
            type: 'SEARCH',
            state: e.target.value,
            valueSearch: keyword,
        }))
        dispatch({
            type: 'SEARCH',
        })
    }

    const handleValueInput = (value, id) => {
        return (e) => {
            if (state.type === 'EDIT') {
                dispatch({
                    type: 'UPDATE',
                    payload: {
                        value,
                        id,
                    }
                })
                setState((prevState) => ({
                    ...prevState,
                    type: 'CREATE'
                }))
            } else {
                dispatch({
                    type: 'CREATE',
                    payload: value,
                })

            }
            setState((prevState) => ({
                ...prevState,
                value: '',
            }))
        }
    }


    const editToDo = (id) => {
        return (e) => {
            e.preventDefault();
            setState((prevState) => ({
                ...prevState,
                type: 'EDIT',
                value: data.filter(item => item.id === id)[0].name,
                idEdit: id,
            }))
        }
    }

    console.log('data', value)

    const handleDelete = (id) => {
        return () => {
            dispatch({
                type: "DELETE",
                payload: id,
            })
        }
    }


    return (
        <div className="container">
            <h1 className="text-center mt-4">Todolist</h1>
            <div className="d-flex mb-5">
                <span>Hello </span>
            </div>
            <div>
                <div>
                    <input onChange={handleChange} type="text" value={value} />
                    <br />
                    <div>
                        <button className="mt-1 mb-5 mr-4" onClick={handleValueInput(value, state.idEdit)}> Enter </button>
                    </div>
                    <br />
                    <p>Tim Kiem</p>
                    <input onChange={handleChangeSearch} id="txtSearch" type="text" state={state.state} />
                </div>
                <JobList valueSearch={valueSearch} valueInput={value} handleDelete={handleDelete} editToDo={editToDo} type={state.type} />
            </div>
        </div>
    );

}

export default Home;