import React from "react";
import { useSelector } from "react-redux";
import JobItem from "../JobItem";

const Job = () => {
    
  const getUser = useSelector((state)=>  state.jobList);

  const renderItem = () => {
    // map từ data ở store ra giao diện
    return getUser.map((item, index) => {
      return <JobItem key={index} item={item} />;
    });
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



export default (Job);
