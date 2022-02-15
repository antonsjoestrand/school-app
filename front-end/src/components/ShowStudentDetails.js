import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ShowStudentDetails extends Component {
  // Initialize the state values
  constructor(props) {
    super(props);
    this.state = {
      student: [],
    };
  }

  // Grab student details by id
  componentDidMount() {
    const url = window.location.pathname;
    const id = url.split("/show-student/")[1];
    axios
      .get("http://localhost:8080/api/students/" + id)
      .then((res) => {
        console.log("res", res.data);
        this.setState({ student: res.data });
      })
      .catch((err) => console.log("Error", err));
  }

  // Delete student by id
  onDeleteClick(id) {
    console.log("Delete", id);
    axios
      .delete("http://localhost:8080/api/students/" + id)
      .then((res) => {
        window.location.href = "http://localhost:3000";
      })
      .catch((err) => {
        console.log("Error while Deleting", err);
      });
  }

  render() {
    const student = this.state.student;

    return (
      <div className='ShowStudentDetails'>
        <div className='container'>
          <div className='row'>
            <h2>Student Details</h2>
          </div>
          <div className='row'>
            <table class='table table-striped'>
              <thead>
                <tr>
                  <th scope='col'>Profile</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Phone</th>
                  <th scope='col'>Course</th>
                  <th scope='col'>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>
                    <img
                      src={student.profile}
                      className='profile-img'
                      alt='Profile'
                      width='100'
                    />
                  </th>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.course}</td>
                  <td>{student.year}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='row'>
            <div className='col-sm-6'>
              <Link
                to={`/edit-student/${student._id}`}
                className='btn btn-primary btn-edit'
              >
                Edit
              </Link>
              <button
                className='btn btn-danger'
                onClick={this.onDeleteClick.bind(this, student._id)}
              >
                {" "}
                Delete{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ShowStudentDetails;
