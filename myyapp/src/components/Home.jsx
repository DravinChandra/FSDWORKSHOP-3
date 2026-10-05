import React from "react";
import { Link } from "react-router-dom";
import s1 from "../assets/de.jpg";

const Home = () => {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">
            My Website
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/login"
                >
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/register"
                >
                  Register
                </Link>
              </li>

            </ul>

            {/* Search */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container-fluid bg-light py-5">

        <div className="container">

          <div className="row align-items-center">

            {/* Text */}
            <div className="col-md-6">

              <h1 className="display-4 fw-bold">
                Welcome to My Website
              </h1>

              <p className="lead">
                Build, learn and manage everything from one place.
              </p>

              <Link
                to="/register"
                className="btn btn-primary btn-lg me-2"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="btn btn-outline-dark btn-lg"
              >
                Login
              </Link>

            </div>

            {/* Image */}
            <div className="col-md-6 text-center mt-4 mt-md-0">

              <img
                src={s1}
                alt="Home"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px" }}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;