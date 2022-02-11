import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const StudentCard = (props) => {
  return (
      <div className='card'>
        <img
          src={props.student.profile}
          className='card-img-top'
          alt='Profile'
        />
        <div className='card-body'>
          <h5 className='card-title'>{props.student.name}</h5>
          <p className='card-text'>{props.student.email}</p>
          <Link
            to={`/show-student/${props.student._id}`}
            key={props.student._id}
            className='btn btn-primary'
          >
            Details
          </Link>
        </div>
      </div>
  );
};
export default StudentCard;
