import React, { Component } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
import { Link } from "react-router-dom";

class ShowStudentList extends Component {
  // Initialize the state values
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  // Grab all students with GET method
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/students")
      .then((res) => {
        this.setState({ students: res.data });
      })
      .catch((err) => console.log(" Error ", err));
  }

  render() {
    const students = this.state.students;
    let studentList;

    // Maps student details if the data is available
    if (!students) {
      console.log("No students");
    } else {
      studentList = students.map((student, i) => (
        <StudentCard student={student} key={i} />
      ));
    }
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='text-center display-4'>Student Record</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-10'>
              <Link to='/add-student' className='btn btn-warning m-3'>
                Add Student
              </Link>
            </div>
          </div>
          <div className='student-row'>
            <div className='col-md-12'>{studentList}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default ShowStudentList;
