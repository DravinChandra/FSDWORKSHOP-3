import React from 'react'
import axios from "axios";
import {Await, link ,useNavigate} from "react-router-dom";
import { useState } from 'react';


function student() {

  const[ formData ,setFormData]= useState({
    name :"",
    email:"",
    admNo:"",
    id:""
  });
  const navigate = useNavigate();
  const handleChange =(e)=>{
    setFormData({
      ...formData,
      [e.target.name] :e.target.value
    });
  };
  const handleRegister = async(e)=>{
    e.preventDefaulter();
  }
  try{
    const response =  axios.post(
      "http://localhost:4000/api/register",
      formData
    );
    console.log(response.data);
    const student = response.data.student;
    localStorage.setItem("user", JSON.stringify(user));
    alert ("Registration Suceesful");
    navigate("/studentlist");
  }
  catch (error){
    console.log(error);
    if(error.response){
      alert(error.response.data.message);

    }
    else{
      alert("Server is not running ");
    }
  };
  return (
      <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center py-5">

      <div className="card shadow p-4" style={{ width: "400px" }}>

        <h2 className="text-center mb-4">
          Register
        </h2>

        <form onSubmit={handleRegister}>

          <div className="mb-3">
            <label className="form-label">Name</label>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3"> 
            <label className="form-label">Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">admNo</label>

            <input
              type="text"
              name="admNo"
              className="form-control"
              placeholder="Enter Admission Number"
              value={formData.admNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">id</label>

            <input
              type="text"
              name="id"
              className="form-control"
              placeholder="Enter password"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>

          

            

          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </div>
  )
}

export default student