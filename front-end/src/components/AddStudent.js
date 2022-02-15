import React, { Component } from "react";
import axios from "axios";

class AddStudent extends Component {
  // Initialize the state values
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

  // Set state value on change
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Submit state values with POST method and return to home page
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
      <div className='createStudent'>
        <div className='container'>
          <div className='row'>
            <h2 className='mb-3'>Add Student</h2>

            <form onSubmit={this.onSubmit}>
              <div className='mb-3'>
                <label htmlFor='profile' className='form-label'>
                  Profile image
                </label>
                <input
                  type='text'
                  name='profile'
                  value={this.state.profile}
                  onChange={this.onChange}
                  placeholder='Image URL'
                  className='form-control'
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={this.state.name}
                  onChange={this.onChange}
                  placeholder='Student name'
                  className='form-control'
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  type='text'
                  name='email'
                  value={this.state.email}
                  onChange={this.onChange}
                  placeholder='Email address'
                  className='form-control'
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='phone' className='form-label'>
                  Phone
                </label>
                <input
                  type='text'
                  name='phone'
                  value={this.state.phone}
                  onChange={this.onChange}
                  placeholder='Phone number'
                  className='form-control'
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='course' className='form-label'>
                  Course
                </label>
                <input
                  type='text'
                  name='course'
                  onChange={this.onChange}
                  placeholder='Enrolled course'
                  value={this.state.course}
                  className='form-control'
                />
              </div>

              <div className='mb-3'>
                <label htmlFor='year' className='form-label'>
                  Year
                </label>
                <input
                  type='text'
                  name='year'
                  value={this.state.year}
                  onChange={this.onChange}
                  placeholder='Enrolled year'
                  className='form-control'
                />
              </div>

              <input
                type='submit'
                value='Add Student'
                className='btn btn-warning mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AddStudent;
