import React, { Component } from "react";
import axios from "axios";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "",
      name: "",
      email: "",
      phone: "",
      course: "",
      year: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const data = {
      profile: this.state.profile,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      course: this.state.course,
      year: this.state.year,
    };

    axios
      .post("http://localhost:8080/api/students/", data)
      .then((res) => {
        this.setState({
          profile: "",
          name: "",
          email: "",
          phone: "",
          course: "",
          year: "",
        });

        window.location.href = "http://localhost:3000";
      })
      .catch((e) => console.log("Could not add record!"));
  };

  render() {
    return (
      <div className='UpdateStudentInfo'>
        <div className='container'>
          <div className='row'>
            <h2>Edit Student</h2>

            <form onSubmit={this.onSubmit}>
              <div className='mb-3'>
                <label htmlFor='profile' className='form-label'>
                  Profile
                </label>
                <input
                  type='text'
                  placeholder='please update profile'
                  name='profile'
                  className='form-control'
                  value={this.state.profile}
                  onChange={this.onChange}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  placeholder='please update name'
                  name='name'
                  className='form-control'
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  type='text'
                  placeholder='please update email'
                  name='email'
                  className='form-control'
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='phone' className='form-label'>
                  Phone
                </label>
                <input
                  type='text'
                  placeholder='please update phone'
                  name='phone'
                  className='form-control'
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='course' className='form-label'>
                  Course
                </label>
                <input
                  type='text'
                  placeholder='please update course'
                  name='course'
                  className='form-control'
                  value={this.state.course}
                  onChange={this.onChange}
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='year' className='form-label'>
                  Year
                </label>
                <input
                  type='text'
                  placeholder='please update year'
                  name='year'
                  className='form-control'
                  value={this.state.year}
                  onChange={this.onChange}
                />
              </div>

              <button type='submit' className='btn btn-success'>
                Update Student
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AddStudent;
