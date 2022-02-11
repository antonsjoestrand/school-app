import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowStudentList from './components/ShowStudentList';
import AddStudent from './components/AddStudent';
import ShowStudentDetails from './components/ShowStudentDetails';
import UpdateStudentInfo from './components/UpdateStudentInfo';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ShowStudentList />}>
          </Route>
          <Route path='/add-student' element={<AddStudent />}>
          </Route>
          <Route path='/show-student/:id' element={<ShowStudentDetails />}>
          </Route>
          <Route path='/edit-student/:id' element={<UpdateStudentInfo />}>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;