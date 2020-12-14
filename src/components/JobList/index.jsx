import React from "react";
import { useSelector } from "react-redux";
import JobItem from "../JobItem";

const JobList = (props) => {

  const { valueInput, handleDelete, editToDo, type, valueSearch } = props;

  const getJob = useSelector((state) => state.jobList);


  const renderItem = () => {
    let resuilt = null;
    if (type === 'SEARCH') {
      resuilt = getJob.filter(item => item.name.includes(valueSearch)).map(item => (
        <JobItem key={item.id} item={item}  handleDelete={handleDelete}    editToDo={editToDo} valueSearch={valueSearch} />
      ));
    } else {
      resuilt = getJob.map(item => (
        <JobItem key={item.id} item={item}  handleDelete={handleDelete} editToDo={editToDo} valueInput={valueInput} />
      ))
    }
    return resuilt;
  };


  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="text-success">Job</th>
          </tr>
        </thead>
        <tbody>{renderItem()}</tbody>
      </table>
    </div>
  );
}



export default (JobList);
