import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleRegister = (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password does not match");
      return;
    }

    console.log(formData);

    alert("Registration Successful");

    // Register ke baad Dashboard par jao
    navigate("/dashboard");

  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center py-5">

      <div className="card shadow p-4" style={{ width: "400px" }}>

        <h2 className="text-center mb-4">
          Register
        </h2>

        <form onSubmit={handleRegister}>

          {/* Name */}
          <div className="mb-3">

            <label className="form-label">
              Name
            </label>

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

          {/* Email */}
          <div className="mb-3">

            <label className="form-label">
              Email
            </label>

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

          {/* Username */}
          <div className="mb-3">

            <label className="form-label">
              Username
            </label>

            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />

          </div>

          {/* Password */}
          <div className="mb-3">

            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          {/* Confirm Password */}
          <div className="mb-3">

            <label className="form-label">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="btn btn-success w-100"
          >
            Register
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center mt-3 mb-0">

          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;